/* ==========================================================================
   MED DermoEstética — comportamiento del sitio
   Sin dependencias. Sin analytics. Sin cookies. Nada se almacena.
   ========================================================================== */

/* Los datos editables viven en site-config.js para no duplicarlos. */
const CONFIG = window.MED_SITE || {
  business: {
    phoneInternational: '',
    phoneDisplay: 'WhatsApp pendiente',
    whatsappMessage: 'Hola, quisiera agendar una evaluación.',
    addressDisplay: 'Dirección pendiente',
    appointmentText: 'Atención con cita previa',
    instagramHandle: '@usuario',
    facebookLabel: 'Med DermoEstética'
  }
};

(function () {
  'use strict';

  // Mejora progresiva: sin JavaScript, el contenido permanece visible.
  document.documentElement.classList.add('reveal-ready');

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const business = CONFIG.business;

  const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── 1. Datos públicos + SEO local ───────────────────────── */
  (function datosPublicos() {
    const texto = [
      ['[data-phone-display]', business.phoneDisplay],
      ['[data-address-display]', business.addressDisplay],
      ['[data-appointment]', business.appointmentText],
      ['[data-instagram-label]', business.instagramHandle],
      ['[data-facebook-label]', business.facebookLabel]
    ];

    texto.forEach(function (item) {
      if (!item[1]) return;
      $$(item[0]).forEach(function (el) { el.textContent = item[1]; });
    });

    if (business.mapUrl) {
      $$('[data-map]').forEach(function (a) {
        a.href = business.mapUrl;
        a.target = '_blank';
        a.rel = 'noopener';
      });
    }

    if (business.instagramUrl) {
      $$('[data-instagram]').forEach(function (a) {
        a.href = business.instagramUrl;
        a.target = '_blank';
        a.rel = 'noopener';
      });
    }

    const schema = $('#business-schema');
    if (schema && business.name) {
      const datos = {
        '@context': 'https://schema.org',
        '@type': 'HealthAndBeautyBusiness',
        name: business.name,
        description: business.description,
        telephone: business.phoneInternational
          ? '+' + business.phoneInternational
          : undefined,
        address: business.streetAddress ? {
          '@type': 'PostalAddress',
          streetAddress: business.streetAddress,
          addressLocality: business.locality,
          addressCountry: business.country
        } : undefined,
        sameAs: business.instagramUrl ? [business.instagramUrl] : undefined,
        availableLanguage: 'es'
      };

      schema.textContent = JSON.stringify(datos);
    }
  })();

  /* ── 2. Enlaces de WhatsApp ─────────────────────────────────
     Se arman desde CONFIG para que el número viva en un solo lugar.
     Si todavía es el placeholder, el botón no promete un chat que
     no existe: lleva a la sección de contacto.                     */
  (function whatsapp() {
    const configurado = /^\d{8,15}$/.test(business.phoneInternational);
    const href = configurado
      ? 'https://wa.me/' + business.phoneInternational +
        '?text=' + encodeURIComponent(business.whatsappMessage)
      : '#contacto';

    $$('[data-wa]').forEach(function (a) {
      a.href = href;
      if (configurado) {
        a.target = '_blank';
        a.rel = 'noopener';
      } else {
        a.classList.add('wa-pendiente');
      }
    });

    if (!configurado) {
      console.warn('[MED] WhatsApp sin configurar: editá assets/site-config.js');
    }
  })();

  /* ── 3. Header que se condensa al bajar ─────────────────── */
  (function header() {
    const header = $('#header');
    const flotante = $('.wa-flotante');
    if (!header) return;

    let ticking = false;

    function actualizar() {
      const y = window.scrollY;
      header.classList.toggle('is-fijo', y > 40);
      if (flotante) flotante.classList.toggle('is-visible', y > 600);
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(actualizar);
        ticking = true;
      }
    }, { passive: true });

    actualizar();
  })();

  /* ── 4. Menú móvil ──────────────────────────────────────── */
  (function menuMovil() {
    const burger = $('.burger');
    const menu = $('#menu-movil');
    if (!burger || !menu) return;

    function alternar(abrir) {
      const abierto = abrir !== undefined ? abrir : burger.getAttribute('aria-expanded') !== 'true';
      burger.setAttribute('aria-expanded', String(abierto));
      burger.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
      menu.hidden = !abierto;
    }

    burger.addEventListener('click', function () { alternar(); });

    // Al elegir un destino, el menú se cierra solo.
    $$('a', menu).forEach(function (a) {
      a.addEventListener('click', function () { alternar(false); });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') {
        alternar(false);
        burger.focus();
      }
    });
  })();

  /* ── 5. Reveal al entrar en pantalla ────────────────────── */
  (function reveal() {
    const elementos = $$('[data-reveal]');
    if (!elementos.length) return;

    // Sin soporte o con movimiento reducido: todo visible de entrada.
    if (sinMovimiento || !('IntersectionObserver' in window)) {
      elementos.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    elementos.forEach(function (el) {
      const d = el.dataset.revealDelay;
      if (d) el.style.setProperty('--reveal-delay', d);
    });

    const observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add('is-visible');
        observador.unobserve(entrada.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

    elementos.forEach(function (el) { observador.observe(el); });
  })();

  /* ── 6. FAQ: una sola abierta por vez ───────────────────── */
  (function faq() {
    const items = $$('.faq__item');
    items.forEach(function (item) {
      item.addEventListener('toggle', function () {
        if (!item.open) return;
        items.forEach(function (otro) {
          if (otro !== item) otro.open = false;
        });
      });
    });
  })();

  /* ── 7. Scroll suave con offset del header fijo ─────────── */
  (function anclas() {
    $$('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        const id = a.getAttribute('href');
        if (!id || id === '#') return;

        const destino = document.querySelector(id);
        if (!destino) return;

        e.preventDefault();
        const alto = ($('#header') || {}).offsetHeight || 0;
        const y = destino.getBoundingClientRect().top + window.scrollY - alto + 1;

        window.scrollTo({ top: y, behavior: sinMovimiento ? 'auto' : 'smooth' });

        // El foco acompaña al scroll — si no, el teclado se queda arriba.
        destino.setAttribute('tabindex', '-1');
        destino.focus({ preventScroll: true });
      });
    });
  })();

  /* ── 8. Modo revisión: ?pendientes=1 ────────────────────────
     Marca en pantalla todo lo que todavía es placeholder.
     Úsalo en la reunión de aprobación; el cliente ve el sitio
     normal sin el parámetro.                                     */
  (function modoPendientes() {
    if (new URLSearchParams(location.search).has('pendientes')) {
      document.body.classList.add('modo-pendientes');
    }
  })();

  /* ── 9. Año del footer ──────────────────────────────────── */
  (function anio() {
    const el = $('[data-anio]');
    if (el) el.textContent = String(new Date().getFullYear());
  })();

})();

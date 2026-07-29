// Comportamento do site — porte direto do `<script type="text/x-dc">` do
// export do Claude Design, sem framework e sem dependência externa.
(function () {
  "use strict";

  var header = document.getElementById("med-header");
  var headerInner = document.getElementById("med-header-inner");
  var burger = document.getElementById("med-burger");
  var menu = document.getElementById("menu-movil");
  var burgerLines = document.querySelectorAll("[data-burger-line]");
  var revelables = document.querySelectorAll("[data-wa-reveal]");

  // --- menú móvil ---------------------------------------------------------

  var menuAbierto = false;

  function setMenu(abierto) {
    menuAbierto = abierto;
    menu.style.maxHeight = abierto ? "480px" : "0px";
    burger.setAttribute("aria-expanded", abierto ? "true" : "false");
    burger.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
    if (burgerLines[0]) {
      burgerLines[0].style.transform = abierto ? "translateY(4px) rotate(45deg)" : "none";
    }
    if (burgerLines[1]) {
      burgerLines[1].style.transform = abierto ? "translateY(-4px) rotate(-45deg)" : "none";
    }
  }

  if (burger && menu) {
    burger.addEventListener("click", function () {
      setMenu(!menuAbierto);
    });

    Array.prototype.forEach.call(document.querySelectorAll("[data-close-menu]"), function (enlace) {
      enlace.addEventListener("click", function () {
        setMenu(false);
      });
    });

    document.addEventListener("keydown", function (evento) {
      if (evento.key === "Escape" && menuAbierto) {
        setMenu(false);
        burger.focus();
      }
    });
  }

  // --- cabecera condensada y elementos que aparecen al bajar --------------

  function alDesplazar() {
    var y = window.scrollY;
    var condensada = y > 40;
    var visible = y > 620;

    if (header) {
      header.style.background = condensada ? "rgba(253,251,248,.94)" : "rgba(253,251,248,0)";
      header.style.backdropFilter = condensada ? "blur(16px)" : "none";
      header.style.webkitBackdropFilter = condensada ? "blur(16px)" : "none";
      header.style.boxShadow = condensada ? "0 1px 0 rgba(46,38,34,.08)" : "none";
    }
    if (headerInner) {
      headerInner.style.paddingTop = condensada ? ".85rem" : "1.5rem";
      headerInner.style.paddingBottom = condensada ? ".85rem" : "1.5rem";
    }

    Array.prototype.forEach.call(revelables, function (elemento) {
      elemento.style.opacity = visible ? "1" : "0";
      elemento.style.visibility = visible ? "visible" : "hidden";
      elemento.style.transform = visible ? "none" : "translateY(12px) scale(.9)";
    });
  }

  window.addEventListener("scroll", alDesplazar, { passive: true });
  alDesplazar();

  // --- preguntas frecuentes: una sola abierta a la vez --------------------

  var botonesFaq = document.querySelectorAll("[data-faq]");
  var abierta = null;

  function pintarFaq() {
    Array.prototype.forEach.call(botonesFaq, function (boton) {
      var indice = boton.getAttribute("data-faq");
      var esta = abierta === indice;
      var panel = document.querySelector('[data-faq-panel="' + indice + '"]');
      var icono = document.querySelector('[data-faq-icon="' + indice + '"]');

      boton.setAttribute("aria-expanded", esta ? "true" : "false");
      if (panel) panel.style.maxHeight = esta ? "320px" : "0px";
      if (icono) {
        icono.style.transform = "translate(-50%,-50%) rotate(" + (esta ? "0deg" : "90deg") + ")";
      }
    });
  }

  Array.prototype.forEach.call(botonesFaq, function (boton) {
    boton.addEventListener("click", function () {
      var indice = boton.getAttribute("data-faq");
      abierta = abierta === indice ? null : indice;
      pintarFaq();
    });
  });
})();

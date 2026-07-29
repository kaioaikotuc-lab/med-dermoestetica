/* ==========================================================================
   MED DermoEstética — datos públicos editables

   Este es el único archivo que hay que tocar para actualizar contacto,
   dirección o redes. No guardar aquí datos de pacientes ni secretos.
   Fuentes y nivel de verificación: ../DADOS_E_FONTES.md
   ========================================================================== */

window.MED_SITE = Object.freeze({
  business: {
    name: 'MED DermoEstética',
    category: 'Esteticista',
    description: 'Tratamientos faciales y corporales con atención personalizada.',

    phoneInternational: '595982879555',
    phoneDisplay: '+595 982 879 555',
    whatsappMessage: 'Hola, quisiera agendar una evaluación.',

    addressDisplay: 'Av. Las Tórtolas, km 4 · Ciudad del Este',
    streetAddress: 'Av. Las Tórtolas, km 4',
    locality: 'Ciudad del Este',
    country: 'PY',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Med+DermoEstetica+Av+Las+Tortolas+Km+4+Ciudad+del+Este+Paraguay',

    appointmentText: 'Con cita previa · Confirmá disponibilidad por WhatsApp',

    /* Corregido 2026-07-29: el perfil real es meddermoesteticacde.
       El handle anterior (@meddermoestetica) daba enlace roto. */
    instagramHandle: '@meddermoesteticacde',
    instagramUrl: 'https://www.instagram.com/meddermoesteticacde/',
    facebookLabel: 'Med DermoEstética'
  }
});

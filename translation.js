const translations = {
  en: {
    nav: {
      about: "About",
      models: "Models",
      team: "Team",
      experience: "Experience",
      contacts: "Contacts"
    },
    hero: {
      title: "Unleash the Power of Perfection",
      subtitle: "The Porsche 911 GT3 - Where Precision Meets Passion. Every detail, engineered for the thrill.",
      button: "Customize your GT3"
    },
    modelSection: {
      model: "911 GT3",
      brand: "Porsche",
      metrics: {
        speed: "max speed",
        acceleration: "0 - 100 km/h",
        horsepower: "horse power"
      },
      values: {
        speed: "318 km/h",
        acceleration: "3.4s",
        horsepower: "510 hp"
      }
    },
    descriptionSection: {
      title1: "Get a Taste of the Porsche Experience.",
      title2: "More than a car, a masterpiece."
    },
    gallerySection: {
      button: "Customize your GT3"
    },
    footer: {
      customerExperience: "Customer Experience",
      scheduleTestDrive: "Schedule a Test Drive",
      requestBrochure: "Request a Brochure",
      dealershipLocator: "Porsche Dealership Locator",
      certifiedPreOwned: "Porsche Certified Pre-Owned",
      support: "Support & Information",
      contactUs: "Contact Us",
      financing: "Porsche Financing Options",
      warranty: "Warranty & Maintenance",
      assistance: "Porsche Assistance",
      contacts: "Contacts",
      email: "Email: support@porsche.pt",
      phone: "Phone: +351 123 456 789",
      reservedRights: "© All rights reserved. Porsche"
    }
  },
  pt: {
    nav: {
      about: "Sobre",
      models: "Modelos",
      team: "Equipa",
      experience: "Experiência",
      contacts: "Contactos"
    },
    hero: {
      title: "Liberte o Poder da Perfeição",
      subtitle: "O Porsche 911 GT3 - Onde a Precisão Encontra a Paixão. Cada detalhe, projetado para a emoção.",
      button: "Personalize seu GT3"
    },
    modelSection: {
      model: "911 GT3",
      brand: "Porsche",
      metrics: {
        speed: "velocidade máxima",
        acceleration: "0 - 100 km/h",
        horsepower: "potência"
      },
      values: {
        speed: "318 km/h",
        acceleration: "3,4s",
        horsepower: "510 cv"
      }
    },
    descriptionSection: {
      title1: "Prove a Experiência Porsche.",
      title2: "Mais que um carro, uma Obra-prima."
    },
    gallerySection: {
      button: "Personalize seu GT3"
    },
    footer: {
      customerExperience: "Experiência do Cliente",
      scheduleTestDrive: "Agende um Test Drive",
      requestBrochure: "Solicitar um Catálogo",
      dealershipLocator: "Localizador de Concessionárias Porsche",
      certifiedPreOwned: "Porsche Certificado de Segunda Mão",
      support: "Suporte & Informações",
      contactUs: "Contacte-nos",
      financing: "Opções de Financiamento Porsche",
      warranty: "Garantia & Manutenção",
      assistance: "Assistência Porsche",
      contacts: "Contactos",
      email: "Email: suporte@porsche.pt",
      phone: "Telefone: +351 123 456 789",
      reservedRights: "© Todos os direitos reservados. Porsche"
    }
  }
};

function changeLanguage(lang) {
  // Navigation
  document.querySelector('.nav-links li:nth-child(1) a').textContent = translations[lang].nav.about;
  document.querySelector('.nav-links li:nth-child(2) a').textContent = translations[lang].nav.models;
  document.querySelector('.nav-links li:nth-child(3) a').textContent = translations[lang].nav.team;
  document.querySelector('.nav-links li:nth-child(4) a').textContent = translations[lang].nav.experience;
  document.querySelector('.nav-links li:nth-child(5) a').textContent = translations[lang].nav.contacts;

  // Hero section
  document.querySelector('main h1').textContent = translations[lang].hero.title;
  document.querySelector('main p').textContent = translations[lang].hero.subtitle;
  document.querySelector('main button').textContent = translations[lang].hero.button;

  // Model section
  document.querySelector('.model-section .heading h2').textContent = translations[lang].modelSection.model;
  document.querySelector('.model-section .heading h3').textContent = translations[lang].modelSection.brand;

  // Metrics
  const metrics = document.querySelectorAll('.metric');
  metrics[0].querySelector('h4').textContent = translations[lang].modelSection.metrics.speed;
  metrics[1].querySelector('h4').textContent = translations[lang].modelSection.metrics.acceleration;
  metrics[2].querySelector('h4').textContent = translations[lang].modelSection.metrics.horsepower;

  // Description section
  document.querySelector('.description-section .title1').textContent = translations[lang].descriptionSection.title1;
  document.querySelector('.description-section .title2').textContent = translations[lang].descriptionSection.title2;

  //Gallery
  document.querySelector('.gallery-section button').textContent = translations[lang].gallerySection.button;

  // Footer
  document.querySelector('.footer-links .customer-experience h6').textContent = translations[lang].footer.customerExperience;
  document.querySelector('.footer-links .customer-experience ul li:nth-child(1) a').textContent = translations[lang].footer.scheduleTestDrive;
  document.querySelector('.footer-links .customer-experience ul li:nth-child(2) a').textContent = translations[lang].footer.requestBrochure;
  document.querySelector('.footer-links .customer-experience ul li:nth-child(3) a').textContent = translations[lang].footer.dealershipLocator;
  document.querySelector('.footer-links .customer-experience ul li:nth-child(4) a').textContent = translations[lang].footer.certifiedPreOwned;

  document.querySelector('.footer-links .support h6').textContent = translations[lang].footer.support;
  document.querySelector('.footer-links .support ul li:nth-child(1) a').textContent = translations[lang].footer.contactUs;
  document.querySelector('.footer-links .support ul li:nth-child(2) a').textContent = translations[lang].footer.financing;
  document.querySelector('.footer-links .support ul li:nth-child(3) a').textContent = translations[lang].footer.warranty;
  document.querySelector('.footer-links .support ul li:nth-child(4) a').textContent = translations[lang].footer.assistance;

  document.querySelector('.contact-info .email').textContent = translations[lang].footer.email;
  document.querySelector('.contact-info .phone').textContent = translations[lang].footer.phone;

  //THIS LINE DOESNT WORK FOR SOME REASON 
  document.querySelector('.company-wrapper p').textContent = translations[lang].footer.reservedRights;
    
}

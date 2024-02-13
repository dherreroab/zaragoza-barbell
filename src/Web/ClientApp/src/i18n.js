import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "menu": {
            "index": "Home",
            "gym": "24H Gym",
            "aep-club": "AEP Club",
            "team": "Team",
            "services": "Services",
            "faqs": "FAQs",
            "contact": "Contact",
            "language": "Language",
          },
          "carousel": {
            "slide1": {
              "title": "Zaragoza Barbell Movera",
              "subtitle": "",
              "text": "The cold weathers real people.",
            },
            "slide2": {
              "title": "Zaragoza Barbell Movera",
              "subtitle": "Any ordinary day at the club",
              "text": "No one separately is essential, together we are.",
            },
            "slide3": {
              "title": "II Catalan Cup",
              "subtitle": "",
              "text": "",
            }
          },
          "gym": {
            "title": "ZARAGOZA BARBELL GYM",
            "subtitle": "Get to know our facilities",
            "text1": "Ce sanctuaire est dédié à la culture de la force, de la santé et de la condition physique optimale. Il offre un environnement propice pour améliorer la santé et la condition physique à tout moment du jour ou de la nuit. Rejoignez-nous et découvrez votre plein potentiel!"
          },
          "team": {
            "title": "ZARAGOZA BARBELL TEAM",
            "subtitle": "Meet our Club Staff",
            "rosi": {
              "header": {
                "teamRole": "Zaragoza Barbell AEP Manager"
              },
              "aboutText": "In charge of managing the AEP Club, her duties include everything related to the AEP as well as: registrations, affiliations, championships.\nAlways willing to help and resolve any questions you may have about the club."
            },
            "david": {
              "header": {
                "teamRole": "Coach/Founder Zaragoza Barbell Gym"
              },
              "aboutText": "Part of the gym's founding team and a powerlifting enthusiast with a solid background in physical conditioning and human performance. His goal is to help you achieve your strength goals and improve your performance."
            },
            "christian": {
              "header": {
                "teamRole": 'Coach/Founder of Gimnasio Zaragoza Barbell'
              },
              "aboutText": "Part of the team of founders of the gym and more than 18 years of experience in powerlifting, their goal is to help you achieve your strength goals and improve your performance."
            },
            "pablo": {
              "header": {
                "teamRole": 'Founder Gimnasio Zaragoza Barbell'
              },
              "aboutText": "Part of the gym's founding team and with a long history in both team sports and powerlifting, their goal is to help you with everything related to gym management."
            },
            "ruben": {
              "header": {
                "teamRole": 'Founder Gimnasio Zaragoza Barbell'
              },
              "aboutText": "Part of the gym's founding team and with a long history in both team sports and powerlifting, their goal is to help you with everything related to gym management."
            }
          },
          "contact": {
            "header": "Contact",
            "sub-header": "Do you want to contact us? Here you have several options, or try to have us pick up your phone or fill out the contact form and we will respond as soon as possible.",
          }
        },
      },
      fr: {
        translation: {
          "menu": {
            "index": "Accueil",
            "gym": "Gym 24H",
            "aep-club": "Club AEP",
            "team": "Équipe",
            "services": "Services",
            "faqs": "FAQs",
            "contact": "Contact",
            "language": "Langue"
          },
          "carousel": {
            "slide1": {
              "title": "Saragosse Barbell Movera",
              "subtitle": "",
              "text": "Le froid, les vraies personnes.",
            },
            "slide2": {
              "title": "Saragosse Barbell Movera",
              "subtitle": "N'importe quelle journée ordinaire au club",
              "text": "Personne séparément n'est essentiel, ensemble nous le sommes.",
            },
            "slide3": {
              "title": "IIe Coupe de Catalogne",
              "subtitle": "",
              "text": "",
            }
          },
          "gym": {
            "title": "SARAGOSSE BARBELL GYM",
            "subtitle": "Découvrez nos installations",
            "text1": "This sanctuary is dedicated to cultivating strength, health, and optimal physical conditioning. It provides an environment conducive to improving health and physical fitness at any time of day or night. Join us and discover your full potential!"
          },
          "team": {
            "title": "ÉQUIPE ZARAGOZA BARBELL",
            "subtitle": "Rencontrez notre personnel de club",
            "rosi": {
              "header": {
                "teamRole": "Gestionnaire AEP du Zaragoza Barbell"
              },
              "aboutText": "Chargée de la gestion du Club AEP, ses tâches incluent tout ce qui concerne l'AEP ainsi que : les inscriptions, les affiliations, les championnats.\nToujours prête à vous aider et à résoudre toutes vos questions sur le club."
            },
            "david": {
              "header": {
                "teamRole": "Entraîneur/Fondateur du Zaragoza Barbell Gym"
              },
              "aboutText": "Faisant partie de l'équipe fondatrice du gymnase et passionné de dynamophilie avec une solide expérience en conditionnement physique et en performance humaine. Son objectif est de vous aider à atteindre vos objectifs de force et à améliorer vos performances."
            },
            "christian": {
              "header": {
                "teamRole": 'Entraîneur/Fondateur du Gimnasio Zaragoza Barbell'
              },
              "aboutText": "Faire partie de l'équipe des fondateurs du gymnase et plus de 18 ans d'expérience en dynamophilie, leur objectif est de vous aider à atteindre vos objectifs de force et à améliorer vos performances."
            },
            "pablo": {
              "header": {
                "teamRole": 'Fondateur Gimnasio Zaragoza Barbell'
              },
              "aboutText": "Faisant partie de l'équipe fondatrice du gymnase et avec une longue histoire dans les sports d'équipe et la dynamophilie, leur objectif est de vous aider pour tout ce qui concerne la gestion du gymnase."
            },
            "ruben": {
              "header": {
                "teamRole": 'Fondateur Gimnasio Zaragoza Barbell'
              },
              "aboutText": "Faisant partie de l'équipe fondatrice du gymnase et avec une longue histoire dans les sports d'équipe et la dynamophilie, leur objectif est de vous aider pour tout ce qui concerne la gestion du gymnase."
            }
          },
          "contact": {
            "header": "Contact",
            "sub-header": "Voulez-vous nous contacter ? Ici vous avez plusieurs options, ou essayez de nous faire répondre par téléphone ou de remplir le formulaire de contact et nous vous répondrons dans les plus brefs délais.",
          }
        }
      },
      es: {
        translation: {
          "menu": {
            "index": "Inicio",
            "gym": "Gimnasio 24H",
            "aep-club": "Club AEP",
            "team": "Equipo",
            "services": "Servicios",
            "faqs": "FAQs",
            "contact": "Contacto",
            "language": "Idioma"
          },
          "carousel": {
            "slide1": {
              "title": "Zaragoza Barbell Movera",
              "subtitle": "",
              "text": "El frio curte a las verdaderas personas.",
            },
            "slide2": {
              "title": "Zaragoza Barbell Movera",
              "subtitle": "Un día cualquiera en el club",
              "text": "Nadie por separado es imprescindible, junto si lo somos.",
            },
            "slide3": {
              "title": "II Copa Catalana",
              "subtitle": "",
              "text": "",
            }
          },
          "team": {
            "title": "EQUIPO ZARAGOZA BARBELL",
            "subtitle": "Conoce a nuestro Staff del Club",
            "rosi": {
              "header": {
                "teamRole": "Responsable Zaragoza Barbell AEP"
              },
              "aboutText": "Encargada de la gestión del Club AEP, entre sus funciones está todo lo relacionado con la AEP asi como: inscripciones, afiliaciones, campeonatos.\nSiempre dispuesta a ayudar y resolver cualquier duda que tengas sobre el club."
            },
            "david": {
              "header": {
                "teamRole": "Coach/Fundador Gimnasio Zaragoza Barbell"
              },
              "aboutText": "Parte del equipo de fundadores del gimnasio y un apasionado del powerlifting con una sólida formación en acondicionamiento físico y rendimiento humano. Su objetivo es ayudarte a alcanzar tus metas de fuerza y mejorar tu desempeño."
            },
            "christian": {
              "header": {
                "teamRole": 'Coach/Fundador Gimnasio Zaragoza Barbell'
              },
              "aboutText": "Parte del equipo de fundadores del gimnasio y más de 18 años de recorrido en powerlifting, su objetivo es ayudarte a alcanzar tus metas de fuerza y mejorar tu desempeño."
            },
            "pablo": {
              "header": {
                "teamRole": 'Fundador Gimnasio Zaragoza Barbell'
              },
              "aboutText": "Parte del equipo de fundadores del gimnasio y con un largo recorrido en los deportes tanto de equipo como powerlifting, su objetivo es ayudarte con todo lo que tenga relación con la gestión del gimnasio."
            },
            "ruben": {
              "header": {
                "teamRole": 'Fundador Gimnasio Zaragoza Barbell'
              },
              "aboutText": "Parte del equipo de fundadores del gimnasio y con un largo recorrido en los deportes tanto de equipo como powerlifting, su objetivo es ayudarte con todo lo que tenga relación con la gestión del gimnasio."
            }
          },
          "gym": {
            "title": "GIMNASIO ZARAGOZA BARBELL",
            "subtitle": "Conoce nuestras instalaciones",
            "text1": "Este santuario se dedica al cultivo de la fuerza, la salud y el condicionamiento físico óptimo. Ofrece un ambiente propicio para mejorar la salud y el condicionamiento físico en cualquier momento del día o de la noche. ¡Únete y descubre tu máximo potencial!"
          },
          "contact": {
            "header": "Contacto",
            "sub-header": "¿Te quieres poner en contacto con nosotros? Aquí tienes varias opciones, o jugartela a que te cojamos el teléfono o rellenar el formulario de contacto y te responde con la mayor brevedad posible.",
          },
          "footer": {
          }
        }
      },
      an: {
        translation: {
          "menu": {
            "index": "Inizio",
            "gym": "Gimnasio 24H",
            "aep-club": "Club AEP",
            "team": "Equipo",
            "services": "Servizios",
            "faqs": "FAQs",
            "contact": "Contacto",
            "language": "Idioma"
          },
          "carousel": {
            "slide1": {
              "title": "Zaragoza Barbell Movera",
              "subtitle": "",
              "text": "O frio tana a las verdaderas personas.",
            },
            "slide2": {
              "title": "Zaragoza Barbell Movera",
              "subtitle": "Un día cualsequiera en o club",
              "text": "Dengún por separau ye impreszindible, chunto si lo somos.",
            },
            "slide3": {
              "title": "II Copa Catalana",
              "subtitle": "",
              "text": "",
            }
          },
          "gym": {
            "title": "GIMNASIO ZARAGOZA BARBELL",
            "subtitle": "Conoxe as nuestras instalazions",
            "text1": "Iste santuario se dedica a cultivar a fuerza, a salut y o condicionamiento físico óptimo. Ofreixe un ambiente propicio ta millorar a salut y o condicionamiento físico en qualsiquier momento d’o día u d’a nueit. ¡Unite y descubre o tuyo máximo potencial!"
          },
          "team": {
            "title": "EQUIPO ZARAGOZA BARBELL",
            "subtitle": "Conoxe a lo nuestro Staff d'o Club",
            "rosi": {
              "header": {
                "teamRole": "Responsable Zaragoza Barbell AEP"
              },
              "aboutText": "Encargada d'a chestión d'o Club AEP, entre as suyas funzions ye tot lo relazionau con l'AEP asi mincho: inscripzions, afiliazions, campionatos.\nSiempre disposada a aduyar y resolver cualsequier duda que tiengas sobre o club."
            },
            "david": {
              "header": {
                "teamRole": "Coach/Fundador Gimnasio Zaragoza Barbell"
              },
              "aboutText": "Parte de l'equipo de fundadors d'o gimnasio y un apasionau d'o powerlifting con una solida formazión en acondizionamiento fisico y rendimiento umano. O suyo obchetivo ye aduyar-te a alcanzar as tuyas metas de fuerza y millorar a tuya desempeño."
            },
            "christian": {
              "header": {
                "teamRole": 'Coach/Fundador Gimnasio Zaragoza Barbell'
              },
              "aboutText": "Parte de l'equipo de fundadors d'o gimnasio y más de 18 años de recorriu en powerlifting, o suyo obchetivo ye aduyar-te a alcanzar as tuyas metas de fuerza y millorar a tuya desempeño."
            },
            "pablo": {
              "header": {
                "teamRole": 'Fundador Gimnasio Zaragoza Barbell'
              },
              "aboutText": "Parte de l'equipo de fundadors d'o gimnasio y con un largo recorriu en os esportes tanto d'equipo como powerlifting, o suyo obchetivo ye aduyar-te con tot o que tienga relazión con a chestión d'o gimnasio."
            },
            "ruben": {
              "header": {
                "teamRole": 'Fundador Gimnasio Zaragoza Barbell'
              },
              "aboutText": "Parte de l'equipo de fundadors d'o gimnasio y con un largo recorriu en os esportes tanto d'equipo como powerlifting, o suyo obchetivo ye aduyar-te con tot o que tienga relazión con a chestión d'o gimnasio."
            }
          },
          "contact": {
            "header": "Contacto",
            "sub-header": "Te quiers meter en contacto con nusatros? Aquí tiens cuantas opzions, u jugartela a que te pillemos o telefono u replenar o formulario de contacto y te responde con a mayor brevedat posible.",
          }
        }
      }
    },
    lng: "es",
    fallbackLng: "es",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
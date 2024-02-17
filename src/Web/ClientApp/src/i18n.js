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
            "text": "Ce sanctuaire est dédié à la culture de la force, de la santé et de la condition physique optimale. Il offre un environnement propice pour améliorer la santé et la condition physique à tout moment du jour ou de la nuit. Rejoignez-nous et découvrez votre plein potentiel!"
          },
          "club": {
            "title": "CLUB AEP ZARAGOZA BARBELL",
            "subtitle": "Get to know our facilities",
            "text": "This sanctuary is dedicated to cultivating strength, health, and optimal physical conditioning. It provides an environment conducive to improving health and physical fitness at any time of day or night. Join us and discover your full potential!"
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
          "rates": {
            "title": "RATES",
            "subtitle": "To consult with the team: Personal training, programming or personalized advice.",
            "attached": "All prices shown include VAT.",
            "ratesInfo": {
              "monthly": {
                "type": "Unlimited Member",
                "price": "€65/month",
                "wayToPay": "Monthly payment"
              },
              "quarterly": {
                "type": "Quarterly Member",
                "price": "€60/month",
                "wayToPay": "Quarterly payment of €180"
              },
              "annual": {
                "type": "Annual Member",
                "price": "€55/month",
                "wayToPay": "Annual payment of €660"
              },
              "day": {
                "type": "day Entry",
                "price": "15€",
                "wayToPay": "Pay on the spot"
              },
              "weekend": {
                "type": "Weekend",
                "price": "€13.33/day",
                "wayToPay": "On-the-spot payment of €40 (Friday to Sunday)"
              },
              "fiveSessions": {
                "type": "5 sessions",
                "price": "€11/day",
                "wayToPay": "On-the-spot payment of €55 (Expiration of one month)"
              },
              "tenSessions": {
                "type": "10 sessions",
                "price": "€9/day",
                "wayToPay": "On-the-spot payment of €90 (Expiration of three months)"
              }
            }
          },
          "contact": {
            "header": "CONTACT",
            "sub-header": "Do you want to contact us? Here you have several options, or try to have us pick up your phone or fill out the contact form and we will respond as soon as possible.",
            "form": {
              "name": "Name",
              "email": "Email",
              "message": "Message",
              "submit": "Send",
              "validation": {
                "name": "Enter your name, it is required",
                "email": "Enter your email, it is required",
                "message": "Enter your message, it is required",
                "captcha": "Solve the captcha, it is required",
                "success": "Message sent successfully",
                "error": "Error sending message"
              }
            }
          },
          "footer": {
            "copy": "All rights reserved.",
            "location": "3 Brazal Almontilla street, 50410, Cuarte De Huerva, Zaragoza. Spain",
            "links": {
              "legal": "Legal Notice",
              "privacy": "Privacy Policy",
              "cookie": "Cookie Policy",
              "accessibility": "Accessibility Statement",
              "faq": "FAQs"
            }
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
            "text": "Ce sanctuaire est dédié à la culture de la force, de la santé et de la condition physique optimale. Il offre un environnement propice pour améliorer la santé et la condition physique à tout moment du jour ou de la nuit. Rejoignez-nous et découvrez votre plein potentiel!"
          },
          "club": {
            "title": "CLUB AEP SARAGOSSE BARBELL",
            "subtitle": "Découvrez nos installations",
            "text": "Ce sanctuaire est dédié à la culture de la force, de la santé et de la condition physique optimale. Il offre un environnement propice pour améliorer la santé et la condition physique à tout moment du jour ou de la nuit. Rejoignez-nous et découvrez votre plein potentiel!"
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
          "rates": {
            "title": "TARIFS",
            "subtitle": "A consulter avec l'équipe : Entraînement personnalisé, programmation ou conseils personnalisés.",
            "attached": "Tous les prix indiqués incluent la TVA.",
            "ratesInfo": {
              "monthly": {
                "type": "Membre illimité",
                "price": "65€/mois",
                "wayToPay": "Paiement mensuel"
              },
              "quarterly": {
                "type": "Membre trimestriel",
                "price": "60€/mois",
                "wayToPay": "Paiement trimestriel de 180€"
              },
              "annual": {
                "type": "Membre annuel",
                "price": "55€/mois",
                "wayToPay": "Paiement annuel de 660 €"
              },
              "day": {
                "type": "Entrée quotidienne",
                "price": "15€",
                "wayToPay": "Payez sur place"
              },
              "weekend": {
                "type": "Week-end",
                "price": "13,33€/jour",
                "wayToPay": "Paiement sur place de 40€ (vendredi au dimanche)"
              },
              "fiveSessions": {
                "type": "5 séances",
                "price": "11€/jour",
                "wayToPay": "Paiement sur place de 55€ (Expiration d'un mois)"
              },
              "tenSessions": {
                "type": "10 séances",
                "price": "9€/jour",
                "wayToPay": "Paiement sur place de 90€ (Expiration de trois mois)"
              }
            }
          },
          "contact": {
            "header": "CONTACT",
            "sub-header": "Voulez-vous nous contacter ? Ici vous avez plusieurs options, ou essayez de nous faire répondre par téléphone ou de remplir le formulaire de contact et nous vous répondrons dans les plus brefs délais.",
            "form": {
              "name": "Nom",
              "email": "E-mail",
              "message": "Message",
              "submit": "Envoyer",
              "validation": {
                "name": "Entrez votre nom, il est obligatoire",
                "email": "Entrez votre email, il est obligatoire",
                "message": "Entrez votre message, il est obligatoire",
                "captcha": "Résoudre le captcha, c'est obligatoire",
                "success": "Message envoyé avec succès",
                "error": "Erreur lors de l'envoi du message"
              }
            }
          },
          "footer": {
            "copy": "Tous droits réservés.",
            "location": "C. Brazal Almontilla 3, 50410, Cuarte De Huerva, Saragosse. Espagne",
            "links": {
              "legal": "Mentions Légales",
              "privacy": "Politique de Confidentialité",
              "cookie": "Politique en Matière de Cookies",
              "accessibility": "Déclaration d'Accessibilité",
              "faq": "FAQ"
            }
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
            "rates": "Tarifas",
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
              "aboutText": "Parte del equipo de fundadores del gimnasio y un apasionado del powerlifting con una sólida formación en acondicionamiento físico y rendimiento humano. Su objetivo es ayudarte a alcanzar tus metas de fuerza y mejorar tu desempeño.",
              "details": {
                "studies": {
                  "row1": "Técnico Superior en Acondicionamiento Físico",
                  "row2": "Certificación ACSAS y S&C - Elite Sports Academy",
                  "row3": "Human Performance Specialist - Movement Matters",
                  "row4": "D.N.S Exercise Trainer (Nivel 1) - Escuela de Rehabilitación de Praga",
                  "row5": "Tengo una sólida base en entrenamiento y acondicionamiento que me permite diseñar programas específicos para cada individuo, estoy capacitado para optimizar el rendimiento deportivo a través de técnicas avanzadas de fuerza y acondicionamiento. Mi enfoque se centra en la mejora funcional y el movimiento eficiente para maximizar el potencial atlético, también poseo conocimiento en el sistema de estabilización neuromuscular que me permite abordar lesiones y mejorar la calidad del movimiento."
                },
                "honors": {
                  "row1": {
                    "title": "Campeonatos",
                    "value": "3"
                  }
                }
              }
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
            "text": "Este santuario se dedica al cultivo de la fuerza, la salud y el condicionamiento físico óptimo. Ofrece un ambiente propicio para mejorar la salud y el condicionamiento físico en cualquier momento del día o de la noche. ¡Únete y descubre tu máximo potencial!"
          },
          "club": {
            "title": "CLUB AEP",
            "subtitle": "Zaragoza Barbell Club ",
            "text": "Tenemos una historia que se origina en el 2021, cuando tres personas apasionadas por el powerlifting decidieron unirse y crear lo que conocemos como Zaragoza Barbell. A partir del 2022, formalizamos la afiliación con la Asociación Española de Powerlifting (AEP), lo que nos permitió participar en competiciones con éxito. Más allá de los trofeos y medallas, lo que realmente nos distingue, es el espíritu de compañerismo y calor humano. El apoyo mutuo y la amistad han sido fundamentales para un crecimiento constante. Hoy en día, seguimos fortaleciendo el compromiso con este apasionante deporte."
          },
          "rates": {
            "title": "TARIFAS",
            "subtitle": "A consultar con el equipo: Entrenamiento personal, programaciones o asesoramiento personalizado.",
            "attached": "Todos los precios mostrados llevan el IVA incluido.",
            "ratesInfo": {
              "monthly": {
                "type": "Socio ilimitado",
                "price": "65€/mes",
                "wayToPay": "Pago mensual"
              },
              "quarterly": {
                "type": "Socio Trimestral",
                "price": "60€/mes",
                "wayToPay": "Pago trimestral de 180€"
              },
              "annual": {
                "type": "Socio Anual",
                "price": "55€/mes",
                "wayToPay": "Pago anual de 660€"
              },
              "day": {
                "type": "Entrada diaria",
                "price": "15€",
                "wayToPay": "Pago en el acto"
              },
              "weekend": {
                "type": "Fin de semana",
                "price": "13,33€/día",
                "wayToPay": "Pago en el acto de 40€ (Viernes a Domingo)"
              },
              "fiveSessions": {
                "type": "5 sesiones",
                "price": "11€/día",
                "wayToPay": "Pago en el acto de 55€ (Caducidad de un mes)"
              },
              "tenSessions": {
                "type": "10 sesiones",
                "price": "9€/día",
                "wayToPay": "Pago en el acto de 90€ (Caducidad de tres meses)"
              }
            }
          },
          "contact": {
            "header": "CONTACTO",
            "sub-header": "¿Te quieres poner en contacto con nosotros? Aquí tienes varias opciones: jugártela a que te cojamos el teléfono o rellenar el formulario de contacto. ¡En ambas te responderemos con la mayor brevedad posible!",
            "form": {
              "name": "Nombre",
              "email": "Correo electrónico",
              "message": "Mensaje",
              "submit": "Enviar",
              "validation": {
                "name": "Introduce tu nombre, es requerido",
                "email": "Introduce tu correo electrónico, es requerido",
                "message": "Introduce tu mensaje, es requerido",
                "captcha": "Resuelve el captcha, es requerido",
                "success": "Mensaje enviado correctamente",
                "error": "Error al enviar el mensaje"
              }
            }
          },
          "footer": {
            "copy": "Todos los derechos reservados.",
            "location": "C. Brazal Almontilla 3, 50410, Cuarte de Huerva, Zaragoza. España",
            "links": {
              "legal": "Aviso Legal",
              "privacy": "Política de Privacidad",
              "cookie": "Política de cookies",
              "accessibility": "Declaración de Accesibilidad",
              "faq": "FAQs"
            }
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
            "text": "Iste santuario se dedica a cultivar a fuerza, a salut y o condicionamiento físico óptimo. Ofreixe un ambiente propicio ta millorar a salut y o condicionamiento físico en qualsiquier momento d’o día u d’a nueit. ¡Unite y descubre o tuyo máximo potencial!"
          },
          "club": {
            "title": "CLUB AEP ZARAGOZA BARBELL",
            "subtitle": "Conoxe as nuestras instalazions",
            "text": "Iste santuario se dedica a cultivar a fuerza, a salut y o condicionamiento físico óptimo. Ofreixe un ambiente propicio ta millorar a salut y o condicionamiento físico en qualsiquier momento d’o día u d’a nueit. ¡Unite y descubre o tuyo máximo potencial!"
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
          "rates": {
            "title": "TARIFAS",
            "subtitle": "A consultar con l'equipo: Entrenamiento personal, programazions u asesoramiento personalizau.",
            "attached": "Toz os pres amostraus levan l'IVA incluyiu.",
            "ratesInfo": {
              "monthly": {
                "type": "Sozio ilimitau",
                "price": "65€/mes",
                "wayToPay": "Pago mensual"
              },
              "quarterly": {
                "type": "Sozio Trimestral",
                "price": "60€/mes",
                "wayToPay": "Pago trimestral de 180€"
              },
              "annual": {
                "type": "Sozio Añal",
                "price": "55€/mes",
                "wayToPay": "Pago añal de 660€"
              },
              "daily": {
                "type": "Dentrada diaria",
                "price": "15€",
                "wayToPay": "Pago en l'auto"
              },
              "weekend": {
                "type": "Cabo de semana",
                "price": "13,33€/día",
                "wayToPay": "Pago en l'auto de 40€ (Viernes a Domingo)"
              },
              "fiveSessions": {
                "type": "5 sesions",
                "price": "11€/día",
                "wayToPay": "Pago en l'auto de 55€ (Caduzidat d'un mes)"
              },
              "tenSessions": {
                "type": "10 sesions",
                "price": "9€/día",
                "wayToPay": "Pago en l'auto de 90€ (Caduzidat d'un tres meses)"
              }
            }
          },
          "contact": {
            "header": "CONTACTO",
            "sub-header": "Te quiers meter en contacto con nusatros? Aquí tiens cuantas opzions, u jugartela a que te pillemos o telefono u replenar o formulario de contacto y te responde con a mayor brevedat posible.",
            "form": {
              "name": "Nombre",
              "email": "Correu electronico",
              "message": "Mandau",
              "submit": "Inviar",
              "validation": {
                "name": "Fica o tuyo nombre, ye requeriu",
                "email": "Fica o tuyo correu electronico, ye requeriu",
                "message": "Fica o tuyo mandau, ye requeriu",
                "captcha": "Resuelte o captcha, ye requeriu",
                "success": "Mandau inviau correctamén",
                "error": "Error en inviar o mandau"
              }
            }
          },
          "footer": {
            "copy": "Toz os dreitos reservaus.",
            "location": "C. Brazal Almontilla 3, 50410, Cuarte De Huerva, Zaragoza. Spain",
            "links": {
              "legal": "Aviso Legal",
              "privacy": "Politica de Privazidat",
              "cookie": "Politica de Cookies",
              "accessibility": "Declarazión d'Azesibilidat",
              "faq": "FAQs"
            }
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
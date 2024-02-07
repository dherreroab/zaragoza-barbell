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
            "text1": "A sanctuary dedicated to the cultivation of strength, health and optimal physical conditioning. We are proud to offer a space where both beginners and experienced athletes can find the tools necessary to achieve their goals.",
            "text2": "At our center, we prioritize excellence in equipment. We have the best brands on the market to guarantee an incomparable training experience,",
            "text3": "Maniak, Strength Shop, Power Gear, Rogue, Barbell Wizard and All Free Weight are some of the brands that trust us to offer quality and long-lasting products.",
            "text4": "In our gym you will not only find a space to develop your strength, but also an environment conducive to improving your health and physical conditioning at any time of the day or night. Join us and discover your maximum potential!",
            "list1": "We trust FitLand for weight training machines, a brand recognized for its quality and durability.",
            "list2": "When it comes to conventional bars, we trust Maniak, providing high quality bars, including IPF Approved ones, along with calibrated plates specifically designed for powerlifting.",
            "list3": "For a variety of specialty bars, we have selected the best from Strength Shop, such as the SPIDER, BOW and CAMBERED. We also offer BASTARD and ORIGINAL 2029 Power Bars.",
            "list4": "Our competition racks and calibrated plate parts come from Barbell Wizard, a brand recognized for its dedication to quality and precision in each piece of equipment hand in hand with FitLand.",
            "list5": "For those who prefer the use of cast discs, we have the All Free Weight line of products, guaranteeing resistance and safety in each lift."
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
            "text1": "Un sanctuaire dédié à la culture de la force, de la santé et d'une condition physique optimale. Nous sommes fiers d'offrir un espace où les athlètes débutants et expérimentés peuvent trouver les outils nécessaires pour atteindre leurs objectifs.",
            "text2": "Dans notre centre, nous priorisons l'excellence des équipements. Nous disposons des meilleures marques du marché pour garantir une expérience de formation incomparable",
            "text3": "Maniak, Strength Shop, Power Gear, Rogue, Barbell Wizard et All Free Weight sont quelques-unes des marques qui nous font confiance pour proposer des produits de qualité et durables.",
            "text4": "Dans notre salle de sport, vous trouverez non seulement un espace pour développer votre force, mais également un environnement propice à l'amélioration de votre santé et de votre condition physique à toute heure du jour ou de la nuit. Rejoignez-nous et découvrez votre potentiel maximum!",
            "list1": "Nous faisons confiance à FitLand pour les appareils de musculation, marque reconnue pour sa qualité et sa durabilité.",
            "list2": "En ce qui concerne les barres conventionnelles, nous faisons confiance à Maniak, qui fournit des barres de haute qualité, y compris celles approuvées IPF, ainsi que des plaques calibrées spécialement conçues pour la dynamophilie.",
            "list3": "Pour une variété de barres spécialisées, nous avons sélectionné le meilleur de Strength Shop, comme les SPIDER, BOW et CAMBERED. Nous proposons également les barres de puissance BASTARD et ORIGINAL 2029.",
            "list4": "Nos supports de compétition et pièces de plaques calibrées proviennent de Barbell Wizard, une marque reconnue pour son dévouement à la qualité et à la précision de chaque pièce d'équipement, main dans la main avec FitLand.",
            "list5": "Pour ceux qui préfèrent l'utilisation de disques moulés, nous proposons la gamme de produits All Free Weight, garantissant résistance et sécurité à chaque levage."
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
            "text1": "Un santuario dedicado al cultivo de la fuerza, la salud y el condicionamiento físico óptimo. Nos enorgullece ofrecer un espacio donde tanto los principiantes como los atletas experimentados pueden encontrar las herramientas necesarias para alcanzar sus metas.",
            "text2": "En nuestro centro, priorizamos la excelencia en el equipamiento.Contamos con las mejores marcas del mercado para garantizar una experiencia de entrenamiento incomparable",
            "text3": "Maniak, Strenght Shop, Power Gear, Rogue, Barbell Wizard y All Free Weight son algunas de las marcas que confían en nosotros para ofrecer productos de calidad y duraderos.",
            "text4": "En nuestro gimnasio no solo encontrarás un espacio para desarrollar tu fuerza, sino también un ambiente propicio para mejorar tu salud y condicionamiento físico en cualquier momento del día o de la noche. ¡Únete a nosotros y descubre tu máximo potencial!",
            "list1": "Confiamos en FitLand para las máquinas de musculación, una marca reconocida por su calidad y durabilidad.",
            "list2": "En cuanto a barras convencionales, confiamos en Maniak, proporcionando barras de alta calidad, incluyendo las IPF Approved, junto con discos calibrados específicamente diseñados para powerlifting.",
            "list3": "Para una variedad de barras especializadas, hemos seleccionado lo mejor de Strenght Shop, como la SPIDER, BOW y CAMBERED.También ofrecemos barras BASTARD y ORIGINAL 2029 Power Bars.",
            "list4": "Nuestros racks de competición y parte de discos calibrados, provienen de Barbell Wizard, una marca reconocida por su dedicaci ón a la calidad y la precisión en cada pieza de equipamiento mano a mano con FitLand.",
            "list5": "Para aquellos que prefieren el uso de discos de fundición, contamos con la lí nea de productos All Free Weight, garantizando resistencia y seguridad en cada levantamiento."
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
            "text1": "Un santuario dedicau a lo cautibo d'a fuerza, a salut y o condizionamiento fisico optimo. Nos enorgullexe ofrexer un espazio do tanto os prinzipians como os atletas esperimentaus pueden trobar as ferramientas nezesarias ta alcanzar as suyas metas.",
            "text2": "En o nuestro zentro, priorizamos a eszelenzia en l'equipamiento.Contamos con as millors marcas d'o mercau ta guarenziar una esperenzia d'entrenamiento incomparable",
            "text3": "Maniak, Strenght Shop, Power Gear, Rogue, Barbell Wizard y All Free Weight son belunas d'as marcas que confían en nusatros ta ofrexer productos de calidat y duraders.",
            "text4": "En o nuestro gimnasio no nomás trobarás un espazio ta desarrollar a tuya fuerza, sino tamién un ambién propizio ta millorar a tuya salut y condizionamiento fisico en cualsequier momento d'o día u d'a nuei. Unir a nusatros y descubre o tuyo masimo potencial!",
            "list1": "Confiamos en FitLand ta las maquinas de musculación, una marca reconoxida por a suya calidat y durabilidat.",
            "list2": "Por lo que fa a barras convenzionals, confiamos en Maniak, proporzionando barras d'alta calidat, incluyindo as IPF Approved, de conchunta con discos calibraus espezificamén diseñaus ta powerlifting.",
            "list3": "Ta una variedat de barras espezializadas, emos estriau lo millor de Strenght Shop, como a SPIDER, BOW y CAMBERED.Tamién ofrexemos barras BASTARD y ORICHINAL 2029 Power Bars.",
            "list4": "Os nuestros racks de competizión y parte de discos calibraus, provienen de Barbell Wizard, una marca reconoxida por a suya dedicaci ón a la calidat y a prezisión en cada pieza d'equipamiento mano a mano con FitLand.",
            "list5": "Ta aquels que prefieren l'uso de discos de fundizión, contamos con a lí nea de productos All Free Weight, guarenziando resistenzia y seguranza en cada levantamiento."
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
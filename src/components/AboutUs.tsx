import { motion } from "framer-motion";
import { AiOutlineBulb, AiOutlineFundProjectionScreen, AiOutlineTeam } from "react-icons/ai";
import { useEffect, useState } from "react";


const items = [
  {
    title: "¿Quiénes somos?",
    text:
         "Somos una asociación de profesionales especializados en electrónica aplicada a la aeronáutica." +
         "Trabajamos en estrecha colaboración con el sector aéreo para brindar servicios de navegación en el espacio aéreo mexicano. "+
         "Nuestro enfoque principal es promover el crecimiento y la superación personal y profesional, fomentando la ayuda mutua y el intercambio de conocimientos, ideas y experiencias."+
         "Además, impulsamos el desarrollo de la industria de la electrónica y la automatización en México a través de alianzas estratégicas con profesionales, empresas y universidades."
    ,
    icon: <AiOutlineTeam className="h-8 w-8 text-blue-600" />,
    image: "/about-us-1.jpg",
    alt: "About us 1"

  },
  {
    title: "¿Qué hacemos?",
    text:
      "Nuestra asociación se compone de ingenieros en electrónica aeronáutica altamente capacitados y apasionados. Nos destacamos por nuestra experiencia en la aplicación de la electrónica en el campo de la aeronáutica.  Trabajamos en estrecha colaboración con el sector aéreo mexicano, brindando servicios especializados en navegación y garantizando un funcionamiento eficiente y seguro en el espacio aéreo."
    ,
    icon: <AiOutlineBulb className="h-8 w-8 text-blue-600" />,
    image: "/about-us-2.jpg",
    alt: "About us 2"
  },
  {
    title: "¿Cómo lo hacemos?",
    text:
      "Como asociación, unimos a profesionales de la industria, académicos y estudiantes de licenciatura y posgrado con el objetivo de impulsar su carrera profesional y contribuir al desarrollo de la industria. Promovemos el crecimiento personal y profesional a través del intercambio de conocimientos, ideas y experiencias. Nos enfocamos en la excelencia y la innovación, estableciendo alianzas estratégicas con profesionales,  empresas y universidades para impulsar el avance tecnológico en electrónica y automatización en México."
    ,
    icon: <AiOutlineFundProjectionScreen className="h-8 w-8 text-blue-600" />,
    image: "/about-us-3.jpg",
    alt: "About us 3"
  },
  {
    title: "¿A donde vamos?",
    text:
      "Hacia dónde vamos: En nuestra asociación, nos esforzamos constantemente por alcanzar nuevos horizontes en el campo de la electrónica aplicada a la aeronáutica. Buscamos seguir impulsando el desarrollo de la industria en México, promoviendo la innovación y la excelencia en cada proyecto en el que nos involucramos. Nuestro objetivo es fortalecer aún más nuestras alianzas estratégicas con profesionales, empresas y universidades, para estar a la vanguardia de las últimas tecnologías y tendencias. A través de la formación continua, el intercambio de conocimientos y la participación activa en la toma de decisiones estratégicas, nos posicionamos como líderes en el avance tecnológico y la transformación de la industria aeroespacial en México y más allá."
    ,
    icon: <AiOutlineFundProjectionScreen className="h-8 w-8 text-blue-600" />,
    image: "/about-us-3.jpg",
    alt: "About us 3"
  },

];
function AboutUs(): JSX.Element {
  const [show, setShow] = useState(false);

  const onScroll = () => {
    const aboutUsSection = document.getElementById("aboutUs");
    if (aboutUsSection && window.scrollY >= aboutUsSection.offsetTop - 300) {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sectionVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="relative bg-white dark:bg-black overflow-hidden"
      id="aboutUsSection"
      variants={sectionVariants}
      initial="hidden"
      animate={show ? "visible" : "hidden"}
    >
      <section className="py-12  fondo" id="aboutUs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-justify">
            <h2 className="text-base text-center text-blue-600 font-semibold tracking-wide uppercase">
              Sobre nosotros
            </h2>
            <p className="mt-2 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Conoce nuestra asociación
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 overflow-hidden"
              initial="hidden"
              animate={show ? "visible" : "hidden"}
            >
              {items.map((item) => (
                <motion.div
                  className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden"
                  key={item.title}
                  variants={itemVariants}
                >
                  <div className="px-6 py-8">
                    <div className="flex justify-center">{item.icon}</div>
                    <h3 className="mt-4 text-2xl font-medium text-gray-900 dark:text-white text-center">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </motion.section>
  );
}

export default AboutUs;

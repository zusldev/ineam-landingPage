import { FaBlackTie, FaBook, FaBrain, FaHandsHelping, FaLevelUpAlt, FaLightbulb, FaMendeley, FaRegHandshake, FaRocket, FaUsers, FaWeightHanging } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const objectivesData = [
  {
    icon: <FaLightbulb className="text-4xl mb-4 text-blue-600" />,
    title: 'Fomentar la innovación y el emprendimiento en el sector aeronáutico.',
    text: 'Buscamos impulsar la creatividad y el espíritu emprendedor de nuestros miembros, a través de proyectos innovadores que contribuyan al desarrollo de la industria aeronáutica.'
  },
  {
    icon: <FaRegHandshake className="text-4xl mb-4 text-blue-600" />,
    title: 'Promover la superación personal y profesional de los asociados.',
    text: 'Nos enfocamos en el desarrollo integral de nuestros miembros, ofreciendo programas de formación y capacitación para potenciar sus habilidades y competencias.'
  },
  {
    icon: <FaUsers className="text-4xl mb-4 text-blue-600" />,
    title: 'Fomentar el intercambio de conocimientos y experiencias entre los miembros.',
    text: 'Creamos espacios de encuentro y colaboración para nuestros miembros, en los que puedan compartir conocimientos, ideas y experiencias para enriquecer su formación profesional y personal.'
  },
  {
    icon: <FaBook className="text-4xl mb-4 text-blue-600" />,
    title: 'Promover la educación y la capacitación continua.',
    text: 'Nos preocupamos por la actualización constante de nuestros miembros, brindando acceso a recursos educativos y de capacitación que les permitan mejorar su desempeño profesional y contribuir al desarrollo del sector aeronáutico.'
  },
  {
    icon: <FaRocket className="text-4xl mb-4 text-blue-600" />,
    title: 'Impulsar el desarrollo de proyectos de alto impacto.',
    text: 'Buscamos desarrollar proyectos de alto impacto que contribuyan al desarrollo de la industria aeronáutica, a través de la innovación y la tecnología.'
  },
  {
    icon: <FaHandsHelping className="text-4xl mb-4 text-blue-600" />,
    title: 'Promover la responsabilidad social y el compromiso con el medio ambiente.',
    text: 'Nos preocupamos por el bienestar de la sociedad y el medio ambiente, por lo que buscamos desarrollar proyectos que contribuyan a la mejora de la calidad de vida de las personas y al cuidado del medio ambiente.'
  },
  {
    icon: <FaBlackTie className="text-4xl mb-4 text-blue-600" />,
    title: 'Formar una bolsa de trabajo del sector aeronáutico.',
    text: 'Nuestro objetivo es promover oportunidades laborales y contribuir al crecimiento y desarrollo de la industria aeronáutica, brindando un espacio donde profesionales talentosos puedan encontrar empleo y empresas puedan acceder a los mejores talentos en el campo.'
  },
  {
    icon: <FaBrain className="text-4xl mb-4 text-blue-600" />,
    title: 'Promover el intercambio con instituciones nacionales o extranjeras.',
    text: 'Trabajamos arduamente para elevar el prestigio de nuestra especialidad en electrónica aeronáutica. A través de la excelencia en nuestros servicios, el fomento de la innovación y el intercambio de conocimientos, buscamos posicionar nuestra especialidad como referente de calidad y profesionalismo en la industria aeronáutica.'
  },
  {
    icon: <FaLevelUpAlt className="text-4xl mb-4 text-blue-600" />,
    title: 'Elevar el prestigio de la especialidad.',
    text: 'Buscamos establecer alianzas estratégicas con instituciones nacionales e internacionales para fomentar el intercambio de conocimientos, experiencias y oportunidades. Con objetivo de fortalecer la asociación promoviendo la sinergia y el crecimiento mutuo.'
  }
  
];
const Objectives = () => {
  const [show, setShow] = useState(false);
  const onScroll = () => {
    const aboutUsSection = document.getElementById("objectives");
    if (aboutUsSection && window.scrollY >= aboutUsSection.offsetTop - 300) {
      setShow(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id='objectives' className="bg-gray-100 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto gap-10">
        <h2 className="text-base text-center text-blue-600 font-semibold tracking-wide uppercase">
          Nuestros objetivos
        </h2>
        <p className="mt-2 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          ¿Qué buscamos?
        </p>
        <div className="grid grid-cols-1 mt-20 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-6 lg:px-8">
          {objectivesData.map((objective, index) => (
            <motion.div
              key={index}
              variants={container}
              initial="hidden"
              animate={show ? "show" : "hidden"}
              className="flex flex-col  items-center"
            >
              <motion.div
                variants={item}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                className="flex flex-col items-center"
              >
                <div className="flex items-center justify-center">
                  {objective.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 text-center mb-6 dark:text-white">{objective.title}</h3>
                <p className="mt-4 text-base text-gray-500 lg:text-center dark:text-gray-300">{objective.text}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;

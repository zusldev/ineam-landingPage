import React from 'react';
import {FaBook, FaHandsHelping, FaLightbulb, FaRegHandshake, FaRocket, FaUsers} from 'react-icons/fa';
import {motion} from 'framer-motion';

const objectivesData = [
  {
    icon: <FaLightbulb className="text-4xl mb-4 text-blue-600"/>,
    title: 'Fomentar la innovación y el emprendimiento en el sector aeronáutico.',
    text: 'Buscamos impulsar la creatividad y el espíritu emprendedor de nuestros miembros, a través de proyectos innovadores que contribuyan al desarrollo de la industria aeronáutica.'
  },
  {
    icon: <FaRegHandshake className="text-4xl mb-4 text-blue-600"/>,
    title: 'Promover la superación personal y profesional de los asociados.',
    text: 'Nos enfocamos en el desarrollo integral de nuestros miembros, ofreciendo programas de formación y capacitación para potenciar sus habilidades y competencias.'
  },
  {
    icon: <FaUsers className="text-4xl mb-4 text-blue-600"/>,
    title: 'Fomentar el intercambio de conocimientos y experiencias entre los miembros.',
    text: 'Creamos espacios de encuentro y colaboración para nuestros miembros, en los que puedan compartir conocimientos, ideas y experiencias para enriquecer su formación profesional y personal.'
  },
  {
    icon: <FaBook className="text-4xl mb-4 text-blue-600"/>,
    title: 'Promover la educación y la capacitación continua.',
    text: 'Nos preocupamos por la actualización constante de nuestros miembros, brindando acceso a recursos educativos y de capacitación que les permitan mejorar su desempeño profesional y contribuir al desarrollo del sector aeronáutico.'
  },
  {
    icon: <FaRocket className="text-4xl mb-4 text-blue-600"/>,
    title: 'Impulsar el desarrollo de proyectos de alto impacto.',
    text: 'Buscamos desarrollar proyectos de alto impacto que contribuyan al desarrollo de la industria aeronáutica, a través de la innovación y la tecnología.'
  },
  {
    icon: <FaHandsHelping className="text-4xl mb-4 text-blue-600"/>,
    title: 'Promover la responsabilidad social y el compromiso con el medio ambiente.',
    text: 'Nos preocupamos por el bienestar de la sociedad y el medio ambiente, por lo que buscamos desarrollar proyectos que contribuyan a la mejora de la calidad de vida de las personas y al cuidado del medio ambiente.'
  }
];

const Objectives = () => {
  return (
    <section id='objectives' className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto gap-10">
        <h2 className="text-base text-center text-blue-600 font-semibold tracking-wide uppercase">
          Nuestros objetivos
        </h2>
        <p className="mt-2 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          ¿Qué buscamos?
        </p>
        <div className="grid grid-cols-1 mt-20 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {objectivesData.map((objective, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: index * 0.6}}
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-center">
                {objective.icon}
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 text-center mb-6">{objective.title}</h3>
              <p className="mt-4 text-base text-gray-500 lg:text-center">{objective.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
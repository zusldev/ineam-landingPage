import {motion} from "framer-motion";
import {FaStar} from "react-icons/fa";

const benefits = [
  {
    title: "Red de profesionales",
    text:
      "Únete a una comunidad de profesionales altamente capacitados que comparten conocimientos y experiencia.",
    icon: <FaStar className="h-8 w-8 text-blue-600"/>,
  },
  {
    title: "Colaboración en proyectos innovadores",
    text:
      "Participa en proyectos de alta tecnología y colabora con otros profesionales en la creación de soluciones innovadoras.",
    icon: <FaStar className="h-8 w-8 text-blue-600"/>,
  },
  {
    title: "Desarrollo profesional",
    text:
      "Aprovecha oportunidades de capacitación y desarrollo profesional para impulsar tu carrera en la industria de la electrónica y la automatización.",
    icon: <FaStar className="h-8 w-8 text-blue-600"/>,
  },
];

const Benefits = () => {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900" id='joinUs'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center px-4 py-8 sm:px-6 lg:px-8">
          <h2 className="text-base text-center text-blue-600 font-semibold tracking-wide uppercase mb-8">
            Beneficios de asociarse con nosotros
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Descubre lo que podemos ofrecerte
          </p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.4, duration: 1.5}}
          >
            {benefits.map((benefit) => (
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                key={benefit.title}
                whileHover={{scale: 1.05}}
              >
                <div className="px-4 py-8 sm:px-6 lg:px-8">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="mt-4 text-2xl font-medium text-gray-900 dark:text-white text-center">
                    {benefit.title}
                  </h3>
                  <p className="mt-4 text-lg text-gray-500 text-center dark:text-gray-300">
                    {benefit.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

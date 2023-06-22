import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const benefits = [
  {
    title: "Red de profesionales",
    text:
      "Únete a una comunidad de profesionales altamente capacitados que comparten conocimientos y experiencia.",
    icon: <FaStar className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Colaboración en proyectos innovadores",
    text:
      "Participa en proyectos de alta tecnología  con la oportunidad de recibir el acceso a financiamiento y respaldo institucional de CONACYT y los fondos sectoriales (ASA-CONACYT).",
    icon: <FaStar className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Espacio de Superación Personal y Profesional",
    text:
      "Ofrecemos un espacio propicio para la superación personal y profesional a través de capacitaciones, cursos, seminarios y talleres tanto internos como en colaboración con instituciones del sector aéreo.",
    icon: <FaStar className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "ATM tecnologías y vanguardistas",
    text:
      "Sumérgete en el fascinante mundo del ATM (Air Traffic Management) y explora tecnologías vanguardistas. Amplía tu conocimiento y descubre las últimas innovaciones en el control del tráfico aéreo a nivel internacional.",
    icon: <FaStar className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Tallers, Ferias y Foros",
    text:
      "Participa en foros y ferias nacionales e internacionales de aviación. Conéctate con expertos, descubre tendencias y establece contactos clave en la industria. Amplía tu red profesional y mantente actualizado en el mundo de la aviación.",
    icon: <FaStar className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Fondo de Ahorro",
    text:
      "Apoyo moral y material a través de un Fondo de Seguridad Social creado para fomentar el ahorro y apoyo mutuos.",
    icon: <FaStar className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Participación Activa: Asambleas Nacionales",
    text:
      "Aporta ideas, proyectos y resoluciones para impulsar los objetivos de la asociación. Participa activamente en las asambleas nacionales, donde podrás influir en la toma de decisiones y contribuir al crecimiento y desarrollo de la organización.",
    icon: <FaStar className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Vínculos Fuertes",
    text:
      "Establece y fortalece los lazos de amistad y ayuda mutua entre los asociados a través de diversas actividades de índole social y cultural. Disfruta de momentos de convivencia, crea conexiones significativas y enriquece tu experiencia como parte de nuestra asociación.",
    icon: <FaStar className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Recursos Exclusivos y Actualizados",
    text:
      "Como miembro de nuestra asociación, tendrás acceso a una amplia gama de recursos exclusivos y actualizados. Esto incluye materiales educativos, informes técnicos, publicaciones especializadas y eventos temáticos.",
    icon: <FaStar className="h-8 w-8 text-blue-600" />,
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1.5 }}
          >
            {benefits.map((benefit) => (
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                key={benefit.title}
                whileHover={{ scale: 1.05 }}
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

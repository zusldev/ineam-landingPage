import { motion } from "framer-motion";
import { FiMail, FiPhone, FiHome } from "react-icons/fi";

function Contact(): JSX.Element {
  return (
    <section className="bg-white px-4 py-8 dark:bg-black sm:px-6 lg:px-8" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-base text-center text-blue-600 font-semibold tracking-wide uppercase">
            Contáctanos
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            ¿Tienes alguna pregunta?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
            Envíanos un mensaje o llámanos para obtener más información sobre
            cómo podemos ayudarte.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 2 }}

        >
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-pointer"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 py-8 bg-gray-100 dark:bg-gray-900">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <FiMail className="h-8 w-8 text-blue-600" />
                </div>
                <div className="ml-4">
                  <div className="text-lg font-medium text-gray-900 dark:text-white">
                    Envíanos un correo electrónico
                  </div>
                  <p className="mt-1 text-gray-500 dark:text-gray-300">
                    ¿Tienes alguna duda? Escríbenos a nuestro correo
                    electrónico y te responderemos lo antes posible.
                  </p>
                  <div className="mt-4">
                    <a
                      href="mailto:info@miempresa.com"
                      className="text-blue-600 hover:text-blue-500"
                    >
                      info@miempresa.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-pointer"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 py-8 bg-gray-100 dark:bg-gray-900">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <FiPhone className="h-8 w-8 text-blue-600" />
                </div>
                <div className="ml-4">
                  <div className="text-lg font-medium text-gray-900 dark:text-white">
                    Llámanos
                  </div>
                  <p className="mt-1 text-gray-500 dark:text-gray-300">
                    ¿Prefieres hablar con nosotros directamente? Llámanos y
                    resolveremos tus dudas o problemas.
                  </p>
                  <div className="mt-4">
                    <a href="tel:5555555555" className="text-blue-600 hover:text-blue-500">
                      +52 55 5555 5555
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-pointer"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 py-8 bg-gray-100 dark:bg-gray-900">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <FiHome className="h-8 w-8 text-blue-600" />
                </div>
                <div className="ml-4">
                  <div className="text-lg font-medium text-gray-900 dark:text-white">
                    Visítanos
                  </div>
                  <p className="mt-1 text-gray-500 dark:text-gray-300">
                    Ven a nuestras oficinas y conoce más sobre como podemos colaborar juntos.
                  </p>
                  <div className="mt-4">
                    <a href="https://goo.gl/maps/9Y1qXJQzYQJ2" target="_blank" className="text-blue-600 hover:text-blue-500">
                      Av. Siempre Viva 742, Springfield
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
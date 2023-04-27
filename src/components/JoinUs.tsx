import { RiMacFill, RiSmartphoneFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";


const Services = () => {

  // const serviceVariants = {
  //   initial: {
  //     opacity: 0,
  //     y: 50,
  //   },
  //   animate: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.6,
  //       ease: "easeInOut",
  //     },
  //   },
  // };

  // const iconVariants = {
  //   initial: {
  //     opacity: 0,
  //     scale: 0.5,
  //   },
  //   animate: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: {
  //       delay: 0.2,
  //       duration: 0.8,
  //       ease: "easeInOut",
  //     },
  //   },
  // };

  // const textVariants = {
  //   initial: {
  //     opacity: 0,
  //     x: 50,
  //   },
  //   animate: {
  //     opacity: 1,
  //     x: 0,
  //     transition: {
  //       duration: 0.6,
  //       ease: "easeInOut",
  //     },
  //   },
  // };

  const [show, setShow] = useState(false);
  const onScroll = () => {
    const aboutUsSection = document.getElementById("joinUs");
    if (aboutUsSection && window.scrollY >= aboutUsSection.offsetTop - 300) {
      setShow(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <section id="joinUs" className="bg-gray-100">
      <div className="container py-12 px-4 mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl font-normal text-blue-600 mb-4">
            ¿Cómo podemos ayudarte?
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Más de 50 años de experiencia en el sector aeronáutico
          </p>
        </div>

        {/* Services */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"> */}
        {/* <motion.div
            className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg py-8 px-6"
            variants={serviceVariants}
            initial="initial"
            animate={show ? "animate" : "initial"} // only animate when show is true
          >
            <motion.span
              className="text-4xl text-blue-600 mb-4"
              variants={iconVariants}
            >
              <RiSmartphoneFill />
            </motion.span>
            <motion.h3
              className="text-xl font-bold text-primary mb-2"
              variants={textVariants}
            >
              Ingeniería Aeronáutica
            </motion.h3>
            <motion.p
              className="text-gray-500 text-center"
              variants={textVariants}
            >
              Contamos con ingenieros especializados en el área aeronáutica.
            </motion.p>
          </motion.div> */}
        {/* Reparación */}
        {/* <motion.div
            className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg py-8 px-6"
            variants={serviceVariants}
            initial="initial"
            animate={show ? "animate" : "initial"} // only animate when show is true
          >
            <motion.span
              className="text-4xl text-blue-600 mb-4"
              variants={iconVariants}
            >
              <RiSmartphoneFill />
            </motion.span>
            <motion.h3
              className="text-xl font-bold text-primary mb-2"
              variants={textVariants}
            >
              Ingeniería Aeronáutica
            </motion.h3>
            <motion.p
              className="text-gray-500 text-center"
              variants={textVariants}
            >
              Contamos con ingenieros especializados en el área aeronáutica.
            </motion.p>
          </motion.div> */}
        {/* Mantenimiento */}
        {/* <motion.div
            className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg py-8 px-6"
            variants={serviceVariants}
            initial="initial"
            animate={show ? "animate" : "initial"} // only animate when show is true
          >
            <motion.span
              className="text-4xl text-blue-600 mb-4"
              variants={iconVariants}
            >
              <RiSmartphoneFill />
            </motion.span>
            <motion.h3
              className="text-xl font-bold text-primary mb-2"
              variants={textVariants}
            >
              Ingeniería Aeronáutica
            </motion.h3>
            <motion.p
              className="text-gray-500 text-center"
              variants={textVariants}
            >
              Contamos con ingenieros especializados en el área aeronáutica.
            </motion.p>
          </motion.div> */}
        {/* Mantenimiento */}
        {/* <motion.div
            className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg py-8 px-6"
            variants={serviceVariants}
            initial="initial"
            animate={show ? "animate" : "initial"} // only animate when show is true
          >
            <motion.span
              className="text-4xl text-blue-600 mb-4"
              variants={iconVariants}
            >
              <RiSmartphoneFill />
            </motion.span>
            <motion.h3
              className="text-xl font-bold text-primary mb-2"
              variants={textVariants}
            >
              Ingeniería Aeronáutica
            </motion.h3>
            <motion.p
              className="text-gray-500 text-center"
              variants={textVariants}
            >
              Contamos con ingenieros especializados en el área aeronáutica.
            </motion.p>
          </motion.div> */}
        {/* </div> */}
        {/* End Services */}
      </div>
    </section >
  );
};

export default Services;

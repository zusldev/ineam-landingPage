import { motion } from "framer-motion";
import { FaEye, FaGlobe, FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function MissionVisionValues(): JSX.Element {
  const items = [
    {
      title: "Misión",
      icon: <FaGlobe className="h-12 w-12 text-blue-600" />,
      text:
        "Nuestra misión es impulsar el desarrollo de la industria de la electrónica y la automatización en México, a través de la colaboración entre profesionales, empresas y universidades.",
      animation: { x: 0, opacity: 1 },
    },
    {
      title: "Visión",
      icon: <FaEye className="h-12 w-12 text-blue-600" />,
      text:
        "Ser la asociación de referencia en México para el desarrollo y la promoción de la industria de la electrónica y la automatización.",
      animation: { x: 0, opacity: 1 },
    },
    {
      title: "Valores",
      icon: <FaHeart className="h-12 w-12 text-blue-600" />,
      text:
        "Nos guiamos por los valores de colaboración, innovación, ética y responsabilidad social en todas nuestras actividades.",
      animation: { x: 0, opacity: 1 },
    },
  ];

  // mostrar el contenido a medida del scroll
  const [show, setShow] = useState(false);
  const onScroll = () => {
    const aboutUsSection = document.getElementById("missionVisionValues");
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

  const itemss = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-white py-16" id="missionVisionValues">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-center text-blue-600 font-semibold tracking-wide uppercase">
            Misión, visión y valores
          </h2>
          <p className="mt-2 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Conoce nuestros compromisos
          </p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10"
            variants={container}
            initial="hidden"
            animate={show ? "show" : "hidden"}
          >
            {items.map((item) => (
              <motion.div
                className="bg-white rounded-lg overflow-hidden p-6"
                key={item.title}
                variants={itemss}
              >
                <div className="flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
                  {item.title}
                </h3>
                <p className="mt-4 text-base text-gray-500">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}




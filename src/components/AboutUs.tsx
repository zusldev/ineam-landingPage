import {motion} from "framer-motion";
import {AiOutlineBulb, AiOutlineFundProjectionScreen, AiOutlineTeam} from "react-icons/ai";
import React from "react";

const items = [
  {
    title: "¿Quiénes somos?",
    text:
      "Somos una asociación de profesionales que busca impulsar el desarrollo de la industria de la electrónica y la automatización en México, a través de la colaboración entre profesionales, empresas y universidades.",
    icon: <AiOutlineTeam className="h-8 w-8 text-blue-600"/>,
    image: "/about-us-1.jpg",
    alt: "About us 1"
  },
  {
    title: "¿Qué hacemos?",
    text:
      "Nuestro objetivo es crear una red de profesionales altamente capacitados, que puedan colaborar en proyectos innovadores y de alta tecnología, y que puedan participar en la toma de decisiones estratégicas de la industria.",
    icon: <AiOutlineBulb className="h-8 w-8 text-blue-600"/>,
    image: "/about-us-2.jpg",
    alt: "About us 2"
  },
  {
    title: "¿Cómo lo hacemos?",
    text:
      "Nuestra asociación está conformada por profesionales de la industria, académicos y estudiantes de licenciatura y posgrado, que buscan impulsar su carrera profesional y contribuir al desarrollo de la industria.",
    icon: <AiOutlineFundProjectionScreen className="h-8 w-8 text-blue-600"/>,
    image: "/about-us-3.jpg",
    alt: "About us 3"
  }
];

export default function AboutUs(): JSX.Element {
  return (
    <section className="py-12" id="aboutUs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-center text-blue-600 font-semibold tracking-wide uppercase">
            Sobre nosotros
          </h2>
          <p className="mt-2 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            ¿Quiénes somos?
          </p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.4, duration: 2}}
          >
            {items.map((item) => (
              <motion.div
                className="bg-white rounded-lg overflow-hidden"
                key={item.title}
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: 0.4, duration: 1}}
              >
                <div className="px-6 py-8">
                  <div className="flex justify-center">{item.icon}</div>
                  <h3 className="mt-4 text-2xl font-medium text-gray-900 text-center">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-lg text-gray-500">{item.text}</p>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ineamLogo from "../assets/images/ineamLogo.png";
import StyleBlock from "@/components/RiFill";
import { motion } from "framer-motion";
import { RiCheckboxBlankCircleFill, RiStarFill } from 'react-icons/ri';

const Hero = () => {
  const [text, setText] = useState("Aeronautica");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText(prevText => prevText === "Aeronautica" ? "Aeroespacial" : "Aeronautica");
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <main className="flex justify-center dark:bg-black items-center  mx-auto">
      <section
        id="home"
        className="grid grid-cols-1 md:grid-cols-2 place-items-center max-w-7xl gap-10 md:gap-72 mx-auto py-16 md:py-32"
      >
        {/* Information */}
        <div className="px-10 py-10 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            <h1 className="text-5xl text-black dark:text-white xl:text-6xl font-bold leading-tight md:leading-[7.5rem]">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Ingenieros en electrónica
              </motion.span>


              <StyleBlock text={text} />

              <span className="flex">de México, AC</span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-gray-500 dark:text-gray-300 text-2xl leading-tight md:leading-[2.5rem]"
            >
              "La ingeniería electrónica al servicio de la seguridad aérea"
            </motion.p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <button
                className="w-full xl:w-auto bg-blue-700 dark:bg-gray-900 dark:hover:bg-gray-800 text-white py-4 px-8 rounded-xl text-xl hover:bg-blue-800 transition-all duration-300 ease-in"
              >
                <a href="#contact">Contáctanos</a>
              </button>
            </div>
          </motion.div>
        </div>
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center gap-8 relative"
        >
          <div className="flex flex-col">
            {/* Content image */}
            <Image
              src={ineamLogo}
              alt={"Logo ineam"}
              className={
                "w-[250px] h-[250px] md:w-[550px] md:h-[450px] object-cover hover:scale-105 transition-all duration-500 ease-in-out"
              }
              quality={100}
              priority={true}
            />
            {/* Content image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              {/* minicard */}
              <div>
                <div className="relative text-center bg-white dark:bg-gray-900 shadow-xl rounded-lg p-4 flex flex-col justify-center gap-2 max-w-[250px] mx-auto -mt-4 lg:-mt-12 lg:ml-20 transition-all duration-200 ">
                  <h2 className="text-xl font-bold tracking-[1px] text-gray-800 dark:text-white">
                    +50 años de experiencia
                  </h2>
                  <div className="flex items-center text-center justify-center gap-2 text-lg text-gray-500">
                    <RiStarFill className="text-sky-600" />
                    <RiStarFill className="text-sky-600" />
                    <RiStarFill className="text-sky-600" />
                    <RiStarFill className="text-sky-600" />
                    <RiStarFill className="text-sky-600" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:-translate-x-8 w-[70vw] h-[70vw] md:w-[380px] md:h-[380px] lg:-translate-x-60 dark:bg-white dark:border-white border-[10px] border-sky-600/50 rounded-full -z-10"></div>
        </motion.div>

      </section>
    </main>
  );
};

export default Hero;

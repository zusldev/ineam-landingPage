import React, { useEffect, useState } from "react";
import Image from "next/image";
import ineamLogo from "../assets/images/ineamLogo.png";
import StyleBlock from "@/components/RiFill";
import { motion } from "framer-motion";

const Hero = () => {
  const [text, setText] = useState("Aeronautica");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText(prevText => prevText === "Aeronautica" ? "Aeroespacial" : "Aeronautica");
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <main className="flex justify-center items-center max-w-7xl mx-auto">
      <section
        id="home"
        className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-10 md:gap-72 mx-auto py-16 md:py-32"
      >
        {/* Information */}
        <div className="px-10 py-10 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            <h1 className="text-5xl xl:text-6xl font-bold leading-tight md:leading-[7.5rem]">
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
              className="text-gray-500 text-2xl leading-tight md:leading-[2.5rem]"
            >
              "La ingeniería electrónica al servicio de la seguridad aérea"
            </motion.p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <button
                className="w-full xl:w-auto bg-blue-800 text-white py-4 px-8 rounded-xl text-xl hover:bg-sky-600 transition-all duration-300 ease-in"
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
          className="flex flex-col justify-center items-center gap-8"

        >

          <div className="flex flex-col ">
            {/* Content image */}
            <Image
              src={ineamLogo}
              alt={"Logo ineam"}
              className={
                "w-[250px] h-[250px] md:w-[450px] md:h-[450px] object-cover hover:scale-110 transition-all duration-500 ease-in-out"
              }
              quality={100}
              priority={true}
            />
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Hero;

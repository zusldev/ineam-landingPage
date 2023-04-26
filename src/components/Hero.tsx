import React from "react";
import Image from "next/image";
import IneamLogo from "../assets/images/Ineam-logo.png";
import StyleBlock from "@/components/RiFill";

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
      {/* Information */}
      <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem]">
            Ingenieros en electrónica
            <StyleBlock text={'Aeronautica'}/>
            de México, AC
          </h1>
          <p className="text-gray-500 text-2xl leading-[2.5rem]">
            "La ingeniería electrónica al servicio de la seguridad aérea"
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button
              className="w-full xl:w-auto bg-blue-800 text-white py-4 px-8 rounded-xl text-xl hover:bg-sky-600 transition-all duration-300 ease-in">
              Contáctanos
            </button>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="md:col-span-3 flex items-center justify-center relative">
        {/* Content image */}
        <div>
          <Image src={IneamLogo} alt={'Logo ineam'}
                 className={"w-[250px] h-[250px] md:w-[550px] md:h-[550px] object-cover xl:-mt-28 hover:scale-110 transition-all duration-500 ease-in-out"}
                 quality={100}
                 priority={true}

          />


        </div>
        {/* Maybe a circle */}
        {/*<div*/}
        {/*  className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-sky-600 border-[10px] border-primary rounded-full -z-10"></div>*/}

        {/* Icons */}
        {/*<div className="hidden md:block">*/}

        {/*  <RiCheckboxBlankCircleFill*/}
        {/*    className={'w-10 h-10 md:w-40 text md:h-32 text-sky-600 rounded-full border-gray-600 absolute top-[12%] right-[20%] xl:right-[10%]'}/>*/}
        {/*  <RiCheckboxBlankCircleFill*/}
        {/*    className={'w-10 h-10 md:w-20 md:h-20 text-sky-600 rounded-full border-gray-600 absolute top-[10%] xl:top-[2%] left-[20%] xl:left-[10%]'}/>*/}
        {/*  <RiCheckboxBlankCircleFill*/}
        {/*    className={'w-10 h-10 md:w-52 md:h-36 text-sky-600 rounded-full absolute bottom-[5%] left-[15%] xl:left-[3%] -rotate-12'}/>*/}
        {/*</div>*/}
      </div>
    </section>
  );
};

export default Hero;
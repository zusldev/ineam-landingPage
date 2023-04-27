import React from "react";
import {RiMacFill, RiSmartphoneFill} from "react-icons/ri";

const Services = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg py-8 px-6">
            <RiSmartphoneFill className="text-4xl text-blue-600 mb-4"/>
            <h3 className="text-xl font-bold text-primary mb-2">
              Ingeniería Aeronáutica
            </h3>
            <p className="text-gray-500 text-center">
              Contamos con ingenieros especializados en el área aeronáutica.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg py-8 px-6">
            <RiMacFill className="text-4xl text-blue-600 mb-4"/>
            <h3 className="text-xl font-bold text-primary mb-2">Reparación</h3>
            <p className="text-gray-500 text-center">
              Reparamos y damos mantenimiento a equipos aeronáuticos.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg py-8 px-6">
            <RiSmartphoneFill className="text-4xl text-blue-600 mb-4"/>
            <h3 className="text-xl font-bold text-primary mb-2">
              Mantenimiento
            </h3>
            <p className="text-gray-500 text-center">
              Mantenimiento preventivo y correctivo a equipos aeronáuticos.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg py-8 px-6">
            <RiMacFill className="text-4xl text-blue-600 mb-4"/>
            <h3 className="text-xl font-bold text-primary mb-2">Supervisión</h3>
            <p className="text-gray-500 text-center">
              Supervisión de equipos aeronáuticos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
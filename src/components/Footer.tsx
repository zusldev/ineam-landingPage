import { Typography } from "@material-tailwind/react";
import logo from "../assets/images/ineamLogo.png";
import Image from 'next/image';


export default function Example() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <Image
          src={logo}
          alt="INEAM"
          width={200}
          height={200}
          className='w-24 h-24'
        />

        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Inicio
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#aboutUs"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Sobre Nosotros
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#joinUs"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Asociarme
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#objectives"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Nuestros objetivos
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#contact"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contacto
            </Typography>
          </li>

        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 INEAM - Todos los derechos reservados
        developed by{" "}
        <a
          href="https://www.github.com/zusldev"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:underline transition-all "
        >
          zusldev
        </a>
        .


      </Typography>
    </footer>
  );
}
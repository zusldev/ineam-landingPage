import {useState} from "react";
// Icons
import {RiCloseLine, RiMenu3Fill} from "react-icons/ri";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50">
      <div className="xl:w-1/6 text-center -mt-4">
        <a href="#" className="text-2xl bg-white font-bold relative p-1 ">
          INEAM
          <span className="text-blue-800 text-5xl">.</span>{" "}
          {/*<RiCheckboxBlankCircleFill className="absolute -left-5 -bottom-5 h-10 w-10 text-blue-800 -z-10"/>*/}
        </a>
      </div>
      <nav
        className={`fixed w-[80%] bg-white md:w-[40%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
      >
        <a href="#home" className="">
          Inicio
        </a>
        <a href="#aboutUs" className="">
          Sobre Nosotros
        </a>
        <a href="#joinUs" className="">
          Asociarme
        </a>
        <a href="#contact" className="">
          Contacto
        </a>
        <a href="#objectives" className="">
          Nuestros Objetivos
        </a>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2 transition-all duration-500 hover:text-blue-500"
      >
        {showMenu ? <RiCloseLine/> : <RiMenu3Fill/>}
      </button>
    </header>
  );
};

export default Header;

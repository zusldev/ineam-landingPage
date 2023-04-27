import { useEffect, useRef, useState } from "react";
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";
import styles from "./Header.module.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  // handle event when click outside menu to hide it
  useEffect(() => {
    const handleClickOutsideMenu = (event: any): void => {
      // @ts-ignore
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideMenu);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, [menuRef]);

  // // handle event when swipe finger to hide menu
  // useEffect(() => {
  //   const handleSwipeMenu = (event) => {
  //     if (event.touches[0].clientX > 200) {
  //       setShowMenu(false);
  //     }
  //   };
  //
  //   document.addEventListener("touchstart", handleSwipeMenu);
  //
  //   return () => {
  //     document.removeEventListener("touchstart", handleSwipeMenu);
  //   };
  // }, []);


  return (
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50">
      <div className="xl:w-1/6 text-center -mt-4">
        <a href="#" className="text-2xl  bg-white font-bold relative p-1 ">
          INEAM
          <span className="text-blue-800 text-5xl">.</span>
        </a>
      </div>
      <div
        ref={menuRef}
        className={`fixed w-[80%] bg-white md:w-[40%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full"
          } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
      >
        <a href="#home" className={styles.item}>
          Inicio
        </a>
        <a href="#aboutUs" className={styles.item}>
          Sobre Nosotros
        </a>
        <a href="#joinUs" className={styles.item}>
          Asociarme
        </a>
        <a href="#objectives" className={styles.item}>
          Nuestros Objetivos
        </a>
        <a href="#contact" className={styles.item}>
          Contacto
        </a>

      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2 transition-all duration-500 hover:text-blue-500"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  );
};

export default Header;

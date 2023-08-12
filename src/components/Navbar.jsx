import React, { useState } from "react";
import { FaBars, FaSearch, FaShoppingBag } from "react-icons/fa"; // Importa los íconos que necesitas

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-[#f0f2e9] text-[#808c82] p-4 flex justify-between items-center">
            <div className="flex items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <a href="/" className="text-bold text-6xl md:pl-10">
                        <strong>Felmel</strong>
                    </a>
                </div>
                <div className="md:hidden">
                    {/* Icono del menú hamburguesa */}
                    <FaBars
                        className="text-xl cursor-pointer"
                        onClick={toggleMenu}
                    />
                </div>
            </div>

            {/* Elementos de navegación */}
            <div className={`md:flex ${isMenuOpen ? "block" : "hidden"}`}>
                <a
                    href="#"
                    className="flex md:text-3xl  mt-4 md:mt-2 mx-4 md:mx-4"
                >
                    Inicio
                </a>
                <a
                    href="#"
                    className="flex md:text-3xl  mt-4 md:mt-2 mx-4 md:mx-4"
                >
                    Catalogo
                </a>
                <a
                    href="#"
                    className="flex md:text-3xl mt-4 md:mt-2 mx-4 md:mx-4"
                >
                    Politicas
                </a>
                <a
                    href="#"
                    className="flex md:text-3xl mt-4 md:mt-2 mx-4 md:mx-4"
                >
                    Nosotros
                </a>
            </div>

            <div className="flex items-center">
                {/* Iconos de búsqueda y carrito de compras */}
                <FaSearch className="text-2xl mr-4 mx-1" />
                <FaShoppingBag className="text-2xl md:mr-10" />
            </div>
        </nav>
    );
};

export default NavBar;


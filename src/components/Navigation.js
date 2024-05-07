import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="flex space-x-8 justify-center mt-2">
            <NavLink to="/about" className={({ isActive }) => isActive ? "px-4 text-xl font-bold text-gold" : "px-4 text-xl text-white hover:text-diamond"}>
                About
            </NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => isActive ? "px-4 text-xl font-bold text-gold" : "px-4 text-xl text-white hover:text-diamond"}>
                Portfolio
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "px-4 text-xl font-bold text-gold" : "px-4 text-xl text-white hover:text-diamond"}>
                Contact
            </NavLink>
            <NavLink to="/resume" className={({ isActive }) => isActive ? "px-4 text-xl font-bold text-gold" : "px-4 text-xl text-white hover:text-diamond"}>
                Resume
            </NavLink>
        </nav>
    );
}

export default Navigation;

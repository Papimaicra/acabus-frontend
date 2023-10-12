import React from 'react';
import logo from '../media/logo-acabus.png';

const Navbar = () => {
  return (
    <nav className="bg-[#0A1F33] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#">
          <img className="w-32 h-auto flex items-center" src={logo} alt="Logo de Renta Plus" /> {/* Aplica las clases flex y items-center aquí */}
        </a>
        
      </div>
    </nav>
  );
};

export default Navbar;

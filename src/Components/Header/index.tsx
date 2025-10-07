import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <nav className="nav">
        <ul className="nav__items">
          <li className="nav__item">
            <Link to="/" className="nav__item-text">Início</Link>
          </li>
          <li className="nav__item">
            <Link to="/sobre" className="nav__item-text">Sobre</Link>
          </li>
          <li className="nav__item">
            <Link to="/cardapio" className="nav__item-text">Cardápio</Link>
          </li>
          <li className="nav__item">
            <Link to="/contato" className="nav__item-text">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

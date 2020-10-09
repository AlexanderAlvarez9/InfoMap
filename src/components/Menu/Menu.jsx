import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';
import logo from '../../assets/imgs/logo.png';

const Menu = () => {
  return (
    <>
      <nav className="Menu">
        <ol className="Menu--name">
          <img className="Menu--name__logo" src={logo} alt="" />
          <Link className="Menu--name__title" to="/">
            InfoMap
          </Link>
        </ol>
        <ol className="Menu--items">
          <li>
            <Link to="/general">Mapa Mundial General</Link>
          </li>
          <li>
            <Link to="/covid">Mapa Mundial Covid</Link>
          </li>
        </ol>
      </nav>
    </>
  );
};

export default Menu;

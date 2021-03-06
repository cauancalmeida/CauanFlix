import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/imagens/newLogo.png';
import './menu.css';
// import Button from '../Buttons';

function Menu() {
  return (
    <header>
      <nav className="Menu">
        <Link to="/">
          <img className="Logo" src={Logo} alt="MONEYFLIX logo" />
        </Link>
        {/* <Button as={Link} className="ButtonLink" to="/Cadastro/Video">
          Novo Video
  </Button> */}
      </nav>
    </header>
  );
}

export default Menu;

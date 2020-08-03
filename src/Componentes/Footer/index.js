import React from 'react';
import { FooterBase } from './styles';
import Logo from "../../assets/imagens/Logo.png";
function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
      <img className='Logo'src={Logo} alt="CauanFlix logo"/>
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;

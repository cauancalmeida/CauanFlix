import React from 'react';
import Logo from '../../assets/imagens/Logo.png';
//import ButtonLink from './components/ButtonLink';
import './menu.css';
import Button from '../Buttons';

function Menu(){
    return(
        <header>
            <nav className='Menu'>
                <a href='/'>
                    <img className='Logo'src={Logo} alt="CauanFlix logo"/>
                </a>
                <Button className="ButtonLink" href="/">
                    Novo Video
                </Button>
            </nav>
        </header>    
    );
}

export default Menu;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Componentes/Pages/Home';
import  { BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './Componentes/Pages/Cadastro/Video';
import CadastroCategoria from './Componentes/Pages/Cadastro/Categoria';

const Pagina404= () => (<div>ERRO 404</div>)

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" component={Home} exact></Route>
    <Route path="/Cadastro/Video" component={CadastroVideo} exact></Route>
    <Route path="/Cadastro/Categoria" component={CadastroCategoria} exact></Route>
    <Route component={Pagina404} ></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

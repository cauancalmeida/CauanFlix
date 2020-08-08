import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault';

function CadastroCategoria(){
    const valoresCategoria={
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias, setCategorias]=useState([]);
    const [valores, setValores]= useState(valoresCategoria);/*array com valor da categoria e uma função para incrementar (vem do use state)*/
     
    function setValor(chave,valor){
        setValores({
            ...valores,
            [chave]:valor, //nome: valor
        });

    }

    function handleChange(evento){
        setValor(evento.target.getAttribute('name'), evento.target.value);
    }
    
    return(
        <PageDefault>
    
    <h1>Cadastro de Categoria: {valores.nome}</h1>
            <form onSubmit={function handleSubmit(infos){
                infos.preventDefault();
                setCategorias([
                    ...categorias,
                    valores
                ]);

                setValor(valoresCategoria)

                }}>

                <div>
                <label>Nome da Categoria: 
                    <input 
                        type='text'
                        name='nome'
                        value= {valores.nome}
                        onChange={handleChange}
                        ></input>
                </label>
                </div>
                <div>
                <label>Descrição: 
                    <textarea 
                        type='text'
                        name='descricao'
                        value= {valores.descricao}
                        onChange={handleChange}
                        ></textarea>
                </label>
                </div>

                <div>
                <label>Cor: 
                    <input 
                        type='color'
                        name='cor'
                        value= {valores.cor}
                        onChange={handleChange}
                    ></input>        
                </label>
                </div>

                <button>Cadastrar</button>
            </form>
            <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>
            <Link to="/">Home</Link>
        </PageDefault>
    );
}

export default CadastroCategoria;
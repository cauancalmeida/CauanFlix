import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault';
import FormField from '../../../FormFileds';
import Button from '../../../Buttons';

function CadastroCategoria() {
  const valoresCategoria = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresCategoria);
  /* array com valor da categoria e uma função para incrementar (vem do use state) */

  function setValor(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor, // nome: valor
    });
  }

  function handleChange(evento) {
    setValor(evento.target.getAttribute('name'), evento.target.value);
  }

  return (
    <PageDefault>

      <h1>
        Cadastro de Categoria:
        {valores.nome}
      </h1>
      <form onSubmit={function handleSubmit(infos) {
        infos.preventDefault();
        setCategorias([
          ...categorias,
          valores,
        ]);
        setValor(valoresCategoria);
      }}
      >

        <FormField
          type="text"
          name="nome"
          value={valores.nome}
          onChange={handleChange}
          label="Nome da Categoria: "
        />

        <FormField
          type="textarea"
          name="descricao"
          value={valores.descricao}
          onChange={handleChange}
          label="Descrição: "
        />

        <FormField
          type="color"
          name="cor"
          value={valores.cor}
          onChange={handleChange}
          label="Cor: "
        />

        <Button>Cadastrar</Button>
      </form>

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>
      <Link to="/">Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;

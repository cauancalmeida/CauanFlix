import React from 'react';
import dadosIniciais from "../../../dados_iniciais.json";
import Menu from '../../Menu';
import BannerMain from "../../BannerMain";
import Carousel from "../../Carousel";
import Footer from "../../Footer";

function Home() {
  return (
    
    <div style={{background:"#141414"}}>
      <Menu/>
      <BannerMain 
       videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
       url={dadosIniciais.categorias[0].videos[0].url}
       videoDescription={"O que é FrontEnd ?"}
      />
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}
      />
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[1]}
      />
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[2]}
      />
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[3]}
      />
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[4]}
      />
      <Footer/>
    </div>
  );
}

export default Home;

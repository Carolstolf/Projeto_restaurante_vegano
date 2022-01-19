// Ana Carolina Simões Ramos

import React from "react"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

import 'bootstrap/dist/css/bootstrap.min.css';

import "../pages/styles/menuStyles.scss"
import { Carousel } from "react-bootstrap";

import Layout from "../components/layout"



const Menu = () => {
    return (
        <Layout>
        
         {/* Carrossel da Página  */}
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/1508632/pexels-photo-1508632.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="First slide"

                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="Second slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="Third slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            {/* Parte sobre informações da comida(acessível a todos, 100% vegano...) */}
            <div className="container-grid">
                <div>
                    <div className="img-grid">
                        <StaticImage
                            src="../images/wallet.png"
                            width={70}
                            alt="wallet"
                        />
                    </div>
                    <h1 className="h1drescription">Acessível <br></br>a<br></br>todos.</h1>
                </div>
                <div>
                    <div className="img-grid">
                    <StaticImage
                            src="../images/salad.png"
                            width={70}
                            alt="salad"
                        />
                    </div>
                    <h1 className="h1drescription">Cardápio<br></br> 100% <br></br>vegano</h1>
                </div>
                <div>
                    <div className="img-grid">
                    <StaticImage
                            src="../images/vegan.png"
                            width={70}
                            alt="vegano"
                        />
                    </div>
                    <h1 className="h1drescription">Produtos<br></br> locais e <br></br>orgânicos</h1>
                </div>
            </div>

            {/* Início cardápio separado por dias da semana
            Feito com grid */}

            <h1 id="cardapio">Cardápio</h1>

            {/* Segunda-feira */}
            <h2 className="container-dias">Segunda-Feira</h2>
            <div className="gridTest">

                <div>
                    {/* Foto do primeiro prato */}
                    <div className="img-grid">
                        <StaticImage
                            src="../images/arroz1.png"
                            width={180}
                            alt="arroz"
                        />
                    </div>
                    {/* Nome do prato */}
                    <h1 className="nomepratogrid">Arroz com <br></br>pimentão vermelho</h1>
                    {/* Botões para escolher o tamanho do prato para mostrar determinado preço */}
                    <ul className="list-tam-grid">
                        <li><button id="Pbutton" type="button">P</button></li>
                        <li><button id="Mbutton" type="button">M</button></li>
                        <li><button id="Gbutton" type="button">G</button></li>

                    </ul>
                    {/* Preço */}
                    <h1 className="precogrid">Preço R$</h1>
                </div>
                <div>
                     {/* Foto do segundo prato */}
                    <div className="img-grid">
                        <StaticImage
                            src="../images/maca2.png"
                            width={200}
                            alt="maçã"
                        />

                    </div>
                    {/* Nome do prato */}
                    <h1 className="nomepratogrid">Maçã assada com <br></br>castanhas</h1>
                    <ul className="list-tam-grid">
                        {/* Botões para escolher o tamanho do prato para mostrar determinado preço */}
                        <li><button id="Pbutton" type="button">P</button></li>
                        <li><button id="Mbutton" type="button">M</button></li>
                        <li><button id="Gbutton" type="button">G</button></li>

                    </ul>
                    {/* Preço */}
                    <h1 className="precogrid">Preço R$</h1>
                </div>
                <div>
                    <div className="img-grid">
                        {/* Foto do terceiro prato */}
                        <StaticImage
                            src="../images/macarrao2.png"
                            width={200}
                            alt="macarrao"
                        />
                    </div>
                    {/* Nome do prato */}
                    <h1 className="nomepratogrid">Penne ao molho<br></br> vermelho com <br></br> tomate </h1>
                    <ul className="list-tam-grid">
                        {/* Botões para escolher o tamanho do prato para mostrar determinado preço */}
                        <li><button type="button">P</button></li>
                        <li><button type="button">M</button></li>
                        <li><button type="button">G</button></li>

                    </ul>
                    {/* Preço */}
                    <h1 className="precogrid">Preço R$</h1>

                </div>

            {/* Cardápio de terça-feira
            Se repete do de segunda-feira */}
            </div>
            <h2 className="container-dias">Terça-Feira</h2>
            <div className="gridTest">

                <div>
                    <div className="img-grid">
                        <StaticImage
                            src="../images/arroz1.png"
                            width={180}
                            alt="arroz"
                        />
                    </div>
                    <h1 className="nomepratogrid">Arroz com <br></br>pimentão vermelho</h1>
                    <ul className="list-tam-grid">
                        <li><button id="Pbutton" type="button">P</button></li>
                        <li><button id="Mbutton" type="button">M</button></li>
                        <li><button id="Gbutton" type="button">G</button></li>

                    </ul>
                    <h1 className="precogrid">Preço R$</h1>
                </div>
                <div>
                    <div className="img-grid">
                        <StaticImage
                            src="../images/maca2.png"
                            width={200}
                            alt="maçã"
                        />

                    </div>
                    <h1 className="nomepratogrid">Maçã assada com <br></br>castanhas</h1>
                    <ul className="list-tam-grid">
                        <li><button id="Pbutton" type="button">P</button></li>
                        <li><button id="Mbutton" type="button">M</button></li>
                        <li><button id="Gbutton" type="button">G</button></li>

                    </ul>
                    <h1 className="precogrid">Preço R$</h1>
                </div>
                <div>
                    <div className="img-grid">
                        <StaticImage
                            src="../images/macarrao2.png"
                            width={200}
                            alt="macarrao"
                        />
                    </div>

                    <h1 className="nomepratogrid">Penne ao molho<br></br> vermelho com <br></br> tomate </h1>
                    <ul className="list-tam-grid">
                        <li><button type="button">P</button></li>
                        <li><button type="button">M</button></li>
                        <li><button type="button">G</button></li>

                    </ul>
                    <h1 className="precogrid">Preço R$</h1>

                </div>

            {/* Cardápio de quarta-feira
            Se repete do de segunda-feira */}

            </div>
            <h2 className="container-dias">Quarta-Feira</h2>
            <div className="gridTest">

                <div>
                    <div className="img-grid">
                        <StaticImage
                            src="../images/arroz1.png"
                            width={180}
                            alt="arroz"
                        />
                    </div>
                    <h1 className="nomepratogrid">Arroz com <br></br>pimentão vermelho</h1>
                    <ul className="list-tam-grid">
                        <li><button id="Pbutton" type="button">P</button></li>
                        <li><button id="Mbutton" type="button">M</button></li>
                        <li><button id="Gbutton" type="button">G</button></li>

                    </ul>
                    <h1 className="precogrid">Preço R$</h1>
                </div>
                <div>
                    <div className="img-grid">
                        <StaticImage
                            src="../images/maca2.png"
                            width={200}
                            alt="maçã"
                        />

                    </div>
                    <h1 className="nomepratogrid">Maçã assada com <br></br>castanhas</h1>
                    <ul className="list-tam-grid">
                        <li><button id="Pbutton" type="button">P</button></li>
                        <li><button id="Mbutton" type="button">M</button></li>
                        <li><button id="Gbutton" type="button">G</button></li>

                    </ul>
                    <h1 className="precogrid">Preço R$</h1>
                </div>
                <div>
                    <div className="img-grid">
                        <StaticImage
                            src="../images/macarrao2.png"
                            width={200}
                            alt="macarrao"
                        />
                    </div>

                    <h1 className="nomepratogrid">Penne ao molho<br></br> vermelho com <br></br> tomate </h1>
                    <ul className="list-tam-grid">
                        <li><button type="button">P</button></li>
                        <li><button type="button">M</button></li>
                        <li><button type="button">G</button></li>

                    </ul>
                    <h1 className="precogrid">Preço R$</h1>

                </div>
            
            {/* Cardápio de quinta-feira
            Se repete do de segunda-feira */}
            </div>
            <h2 className="container-dias">Quinta-Feira</h2>
            <div className="gridTest">

                <div>
                    <div className="img-grid">
                        <StaticImage
                            src="../images/arroz1.png"
                            width={180}
                            alt="arroz"
                        />
                    </div>
                    <h1 className="nomepratogrid">Arroz com <br></br>pimentão vermelho</h1>
                    <ul className="list-tam-grid">
                        <li><button id="Pbutton" type="button">P</button></li>
                        <li><button id="Mbutton" type="button">M</button></li>
                        <li><button id="Gbutton" type="button">G</button></li>

                    </ul>
                    <h1 className="precogrid">Preço R$</h1>
                </div>
                <div>
                    <div className="img-grid">
                        <StaticImage
                            src="../images/maca2.png"
                            width={200}
                            alt="maçã"
                        />

                    </div>
                    <h1 className="nomepratogrid">Maçã assada com <br></br>castanhas</h1>
                    <ul className="list-tam-grid">
                        <li><button id="Pbutton" type="button">P</button></li>
                        <li><button id="Mbutton" type="button">M</button></li>
                        <li><button id="Gbutton" type="button">G</button></li>

                    </ul>
                    <h1 className="precogrid">Preço R$</h1>
                </div>
                <div>
                    <div className="img-grid">
                        <StaticImage
                            src="../images/macarrao2.png"
                            width={200}
                            alt="macarrao"
                        />
                    </div>

                    <h1 className="nomepratogrid">Penne ao molho<br></br> vermelho com <br></br> tomate </h1>
                    <ul className="list-tam-grid">
                        <li><button type="button">P</button></li>
                        <li><button type="button">M</button></li>
                        <li><button type="button">G</button></li>

                    </ul>
                    <h1 className="precogrid">Preço R$</h1>

                </div>
            
            {/* Cardápio de sexta-feira
            Se repete do de segunda-feira */}
            </div>
            <h2 className="container-dias">Sexta-Feira</h2>
            <div className="gridTest">

                <div>
                    <div className="img-grid">
                        <StaticImage
                            src="../images/arroz1.png"
                            width={180}
                            alt="arroz"
                        />
                    </div>
                    <h1 className="nomepratogrid">Arroz com <br></br>pimentão vermelho</h1>
                    <ul className="list-tam-grid">
                        <li><button id="Pbutton" type="button">P</button></li>
                        <li><button id="Mbutton" type="button">M</button></li>
                        <li><button id="Gbutton" type="button">G</button></li>

                    </ul>
                    <h1 className="precogrid">Preço R$</h1>
                </div>
                <div>
                    <div className="img-grid">
                        <StaticImage
                            src="../images/maca2.png"
                            width={200}
                            alt="maçã"
                        />

                    </div>
                    <h1 className="nomepratogrid">Maçã assada com <br></br>castanhas</h1>
                    <ul className="list-tam-grid">
                        <li><button id="Pbutton" type="button">P</button></li>
                        <li><button id="Mbutton" type="button">M</button></li>
                        <li><button id="Gbutton" type="button">G</button></li>

                    </ul>
                    <h1 className="precogrid">Preço R$</h1>
                </div>
                <div>
                    <div className="img-grid">
                        <StaticImage
                            src="../images/macarrao2.png"
                            width={200}
                            alt="macarrao"
                        />
                    </div>

                    <h1 className="nomepratogrid">Penne ao molho<br></br> vermelho com <br></br> tomate </h1>
                    <ul className="list-tam-grid">
                        <li><button type="button">P</button></li>
                        <li><button type="button">M</button></li>
                        <li><button type="button">G</button></li>

                    </ul>
                    <h1 className="precogrid">Preço R$</h1>

                </div>
            
            {/* Cardápio de sábado
            Se repete do de segunda-feira */}
            </div>
            <h2 className="container-dias">Sábado</h2>
            <div className="gridTest">

                <div>
                    <div className="img-grid">
                        <StaticImage
                            src="../images/arroz1.png"
                            width={180}
                            alt="arroz"
                        />
                    </div>
                    <h1 className="nomepratogrid">Arroz com <br></br>pimentão vermelho</h1>
                    <ul className="list-tam-grid">
                        <li><button id="Pbutton" type="button">P</button></li>
                        <li><button id="Mbutton" type="button">M</button></li>
                        <li><button id="Gbutton" type="button">G</button></li>

                    </ul>
                    <h1 className="precogrid">Preço R$</h1>
                </div>
                <div>
                    <div className="img-grid">
                        <StaticImage
                            src="../images/maca2.png"
                            width={200}
                            alt="maçã"
                        />

                    </div>
                    <h1 className="nomepratogrid">Maçã assada com <br></br>castanhas</h1>
                    <ul className="list-tam-grid">
                        <li><button id="Pbutton" type="button">P</button></li>
                        <li><button id="Mbutton" type="button">M</button></li>
                        <li><button id="Gbutton" type="button">G</button></li>

                    </ul>
                    <h1 className="precogrid">Preço R$</h1>
                </div>
                <div>
                    <div className="img-grid">
                        <StaticImage
                            src="../images/macarrao2.png"
                            width={200}
                            alt="macarrao"
                        />
                    </div>

                    <h1 className="nomepratogrid">Penne ao molho<br></br> vermelho com <br></br> tomate </h1>
                    <ul className="list-tam-grid">
                        <li><button type="button">P</button></li>
                        <li><button type="button">M</button></li>
                        <li><button type="button">G</button></li>

                    </ul>
                    <h1 className="precogrid">Preço R$</h1>

                </div>

            </div>


            {/* Parte das informações sobre Delivery */}


            <div className="container-delivery">
                <h1 id="delivery">Delivery</h1>
                <p className="delivery-info">Nós do Contra o Filé estamos atendendo preferencialmente pelo WhatsApp, entretanto atendemos também por aplicativos de entrega.</p>
                <p className="delivery-info">Aviso!!</p>
                <p className="delivery-info">Devido à pandemia do Covid-19 não estaremos atendendo presencialmente. Apenas por delivery. A organização do Contra o Filé agradece a sua compreensão</p>
            
            {/* Imagens que levariam para a respectiva página do delivery do restaurante ou para o whatsapp do restaurante */}
                <div className="container-options">
                    <StaticImage className="img-del"
                        src="../images/whatsapp.png"
                        width={50}
                        alt="whatsapp"
                    />
                    <StaticImage className="img-del"
                        src="../images/delivery-man.png"
                        width={50}
                        alt="uber eats"
                    />
                    <StaticImage className="img-del"
                        src="../images/food-delivery.png"
                        width={50}
                        alt="ifood"
                    />
                </div>

            </div>

        </Layout>


    )
}

export default Menu
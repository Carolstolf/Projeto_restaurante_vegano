// Ana Carolina Simões Ramos

import React from "react"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

import "../components/headerstyle.scss"


const Header = () => {

    return (
        <header>
            
            {/* Imagem logo */}

            <div className="img-header">
                    <StaticImage
                        src="../images/logo1.png"
                        width={200}
                        layout="fixed"
                        alt="logo"
                    />
                </div>

            {/* Menu navegação */}
                <div class="nav">

                    <label for="toggle">&#9776;</label>
                    <input type="checkbox" id="toggle" />
                    <div class="menu">
                        <Link className="link" to="/">Bem-vindo</Link>
                        <Link className="link" to="#cardapio">Cardápio</Link>
                        <Link className="link" to="#delivery">Delivery</Link>
                        <Link className="link" to="#info-grid">Sobre nós</Link>
                    </div>
                </div>
           

        </header>



    )
}


export default Header
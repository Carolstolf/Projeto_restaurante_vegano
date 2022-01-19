// Ana Carolina Simões Ramos

import React from "react"
import { Link } from "gatsby"

import "../pages/styles/styles.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

import { StaticImage } from "gatsby-plugin-image"

// Pagina inicial (Bem-Vindo)

const PrincipalPage = () => {
  return (
    <body>
      <div className="container-page">
        <div className="logoPrincipal">
          <StaticImage
            src="../images/logo2.png"
            width={500}
            alt="imagem principal"
          />
        </div>
        <h1 className="slogan">Comida vegana saudável e fresca</h1>
        <Link className="linkForPage" to="/pagemenu">
          Confira nosso cardápio!
        </Link>
        

      </div>
    </body>
  )
}

export default PrincipalPage
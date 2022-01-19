// Ana Carolina Simões Ramos

import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "../components/footerstyle.scss"

const Footer = () => {
    return (
        <footer>

            <div id="info-grid">
                <div>
                    <h1 className="information">Horário de funcionamento</h1>
                    <h2 className="information-2">De segunda a sábado das 11h às 15h</h2>
                </div>
                <div>
                    <h1 className="information">Onde estamos</h1>
                    <h2 className="information-2">Rua Alfredo Lopes 1717 - CEP 13560460</h2>
                    <h2 className="information-2">Telefone: (16) 98765-1234</h2>
                </div>
            
            </div>


            <div className="container-footer">
                <div className="container-rights">
                    <p>© 2022 Contra o Filé. Todos os direitos reservados.</p>
                </div>

                {/* Imagens Midia Social */}
                <div className="container-social-medias">
                    <div>
                    <StaticImage
                        src="../images/whatsapp.png"
                        width={30}
                        alt="whatsapp"
                    />
                    <StaticImage
                        src="../images/instagram.png"
                        width={30}
                        alt="instagram"
                    />
                    <StaticImage
                        src="../images/facebook.png"
                        width={30}
                        alt="facebook"
                    />
                </div>
                </div>
                
            </div>

        </footer>



    )
}

export default Footer
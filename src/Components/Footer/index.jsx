import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
const index = () => {
  return (
    <>
       <footer>
            <div id="footer_content">
                <div id="footer_contacts">
                    <h3>HEALTH ID</h3>

                   {/*  <div id="footer_social_media">
                        <Link to="#" class="footer-link" id="instagram">
                            <i class="fa-brands fa-instagram"></i>
                        </Link>

                        <Link class="footer-link" id="facebook">
                            <i class="fa-brands fa-facebook-f"></i>
                        </Link>

                        <Link to="#" class="footer-link" id="whatsapp">
                            <i class="fa-brands fa-whatsapp"></i>
                        </Link>
                    </div> */}
                </div>
                
            

                <ul className="footer-list">
                    <li>
                        <h3>Desenvolvedores</h3>
                    </li>
                    <li>
                        <Link to="https://github.com/Pontessxx" className="footer-link">Henrique Pontes Oliveira</Link>
                    </li>
                    <li>
                        <Link to="#" className="footer-link">Guilherme Brazioli</Link>
                    </li>
                    
                </ul>
            </div>

            <div id="footer_copyright">
                &#xa9; Pontes 2023 all 
                Todos os direitos reservados

            </div>
        </footer>
    </>
  )
}

export default index
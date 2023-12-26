import React from "react"
import Image from "next/image"
import styles from "../../styles/footer.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faTwitterSquare, faLinkedin, faInstagram, faDiscord, faRedditSquare, faTiktok } from "@fortawesome/free-brands-svg-icons"


export default function Footer(){
    return (
        <div className={styles.rodape}>
            <div className={styles.menu_redes}>
                <a className={styles.icone_contatos}  target="_blank">
                    <i className={styles.redes_sociais}>
                        <FontAwesomeIcon icon={faTwitterSquare} />
                    </i>
                </a>
                <a className={styles.icone_contatos}  target="_blank">
                    <i className={styles.redes_sociais}>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </i>
                </a>
                <a className={styles.icone_contatos}  target="_blank">
                    <i className={styles.redes_sociais}>
                        <FontAwesomeIcon icon={faInstagram} />
                    </i>
                </a>
                <a className={styles.icone_contatos} target="_blank">
                    <i className={styles.redes_sociais}>
                        <FontAwesomeIcon icon={faDiscord} />
                    </i>
                </a>
                <a className={styles.icone_contatos} target="_blank">
                    <i className={styles.redes_sociais}>
                        <FontAwesomeIcon icon={faRedditSquare} />
                    </i>
                </a>
                <a className={styles. icone_contatos} target="_blank">
                    <i className={styles.redes_sociais}>
                        <FontAwesomeIcon icon={faTiktok} />
                    </i>
                </a>
                <a className={styles.icone_contatos} target="_blank">
                    <i className={styles.redes_sociais}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </i>
                </a>
            </div>

            <div className={styles.nav_rodape}>
                <a  className={styles.footer_navbar}>
                    <p className={styles.navbar_nome}>Explorar</p>
                </a>
                <a className={styles.footer_navbar}>
                    <p className={styles.navbar_nome}>Crie Seu NFT</p>
                </a>
                <a  className={styles.footer_navbar}>
                    <p className={styles.navbar_nome}>Sobre Nós</p>
                </a>
            </div>
            <div className={styles.container_copyright}>
                <p className={styles.copyright}>Copyright</p>
                <a><Image src='/static/img/BluebedLogo.png' height={50} width={50} /></a>
            </div>
        </div>

    )
}


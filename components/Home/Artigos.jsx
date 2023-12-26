import React from 'react'
import styles from '../../styles/artigos.module.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFingerprint, faInfo, faPallet, faMoneyBill } from '@fortawesome/free-solid-svg-icons'

export default function Artigos() {
    return (
        <section className={styles.artigos}>
                <div className={styles.artigo} >
                    <div className={styles.artigo_azul}>
                        <div className={styles.artigo_estilo}>
                            <i className={styles.icone_artigo}>
                                <FontAwesomeIcon icon={faInfo} />
                            </i>
                        </div>
                        <h3 className={styles.artigo_titulo}>Artigo 1</h3>
                        <p className={styles.artigo_descricao}>Explore beautiful digital art by talented artists from the world.</p>
                    </div>
                </div>
                <div className={styles.artigo} >
                    <div className={styles.artigo_laranja}>
                        <div className={styles.artigo_estilo}>
                            <i className={styles.icone_artigo}>
                            <FontAwesomeIcon icon={faFingerprint} />
                            </i>
                        </div>
                        <h3 className={styles.artigo_titulo}>Artigo 2</h3>
                        <p className={styles.artigo_descricao}>Easily buy and sell your NFTs in the largest marketplace.</p>
                    </div>
                </div>
                <div className={styles.artigo} >
                    <div className={styles.artigo_verde}>
                        <div className={styles.artigo_estilo}>
                            <i className={styles.icone_artigo}>
                            <FontAwesomeIcon icon={faPallet} />
                            </i>
                        </div>
                        <h3 className={styles.artigo_titulo}>Artigo 3</h3>
                        <p className={styles.artigo_descricao}>Add new, trending and rare artwork to your collection.</p>
                    </div>
                </div>
                <div className={styles.artigo}>
                    <div className={styles.artigo_amarelo}>
                        <div className={styles.artigo_estilo}>
                            <i className={styles.icone_artigo}>
                            <FontAwesomeIcon icon={faMoneyBill} />
                            </i>
                        </div>
                        <h3 className={styles.artigo_titulo}>Artigo 4</h3>
                        <p className={styles.artigo_descricao}>Get paid by selling NFTs with secured payment methods.</p>
                    </div>
                </div>
                {/* <div className={styles.botao-explorar">
                    <a href="/" className={styles.a-explore-market">
                        <button className={styles.explore-market">Explorar Bluebed</button>
                    </a>
                </div> */}
        </section>
    )
}

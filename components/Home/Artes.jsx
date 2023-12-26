import React from 'react'
import styles from '../../styles/artes.module.css'

export default function Artes() {
    return (
        <section className={styles.principais_artes}>
                <div className={styles.arte_container_titulo}>
                    <h2 className={styles.artes_titulo}>Artes em alta</h2>
                </div>
                <a className={styles.link_produto}>
                    <div className={styles.produto}>
                        <div className={styles.produto_imagem}></div>
                        <p className={styles.produto_tag}>Artes, NFT</p>
                        <p className={styles.produto_nome}>Cama Azul #1</p>
                        <p className={styles.produto_valor}>R$ 1000,00</p>
                        <i className= {`${styles.fa_solid} ${ styles.fa_cart_shopping}`}>Comprar</i>
                        </div>
                </a>
        </section>
    )
}

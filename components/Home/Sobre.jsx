import React from 'react'
import styles from "../../styles/sobre.module.css"

export default function Sobre(){
    return (
        <section className={styles.bluebed}>
            <iframe src="https://www.youtube.com/embed/XHOmBV4js_E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div className={styles.container_sobre_texto}>
                <h2 className={styles.bluebed_titulo}>Conheça o universo da Bluebed</h2>
                <p className={styles.bluebed_descricao}>O melhor e mais moderno marketplace de NFTs da América Latina.</p>
            </div>
        </section>
    )
}


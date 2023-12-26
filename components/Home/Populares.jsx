import React from 'react'
import styles from "../../styles/populares.module.css"

export default function Populares(){
    return(
        <section className={styles.populares}>
                <h2 className={styles.populares_titulo}>Encontre os nossos artistas mais populares</h2>
                <h3 className={styles.populares_descricao}>Descubra novos artistas talentosos e colecionáveis raros para sua coleção.</h3>
                <div className={styles.container_artistas}>
                    <div className={styles.artistas}>
                        <h4 className={styles.artistas_descricao}>Artista 1</h4>
                    </div>
                    <div className={styles.artistas}>
                        <h4 className={styles.artistas_descricao}>Artista 2</h4>
                    </div>
                    <div className={styles.artistas}>
                        <h4 className={styles.artistas_descricao}>Artista 3</h4>
                    </div>
                    <div className={styles.artistas}>
                        <h4 className={styles.artistas_descricao}>Artista 4</h4>
                    </div>
                </div>
            </section>
    )
}

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../../styles/trending.module.css"

import placeholder from '../../public/static/img/bluebedLogo.png'

export default function Trending() {
    return (
        <section className={styles.trending}>
            <div className={styles.trending_container_titulo}>
                <h2 className={styles.trending_titulo}>Coleções em alta</h2>
            </div>
            <div className={styles.trending_todos}>
                <div className={styles.trending_produto}>
                    <Image src={placeholder} alt="" className={styles.trending_imagem}/>
                    <h4 className={styles.trending_nome}>Cama Azul</h4>
                    <button className={styles.trending_botao}>Ver Coleção</button>
                </div>
                <div className={styles.trending_produto}>
                    <Image src={placeholder} alt="" className={styles.trending_imagem} />
                    <h4 className={styles.trending_nome}>Cama Azul</h4>
                    <button className={styles.trending_botao}>Ver Coleção</button>
                </div>
                <div className={styles.trending_produto}>
                    <Image src={placeholder} alt="" className={styles.trending_imagem} />
                    <h4 className={styles.trending_nome}>Cama Azul</h4>
                    <button className={styles.trending_botao}>Ver Coleção</button>
                </div>
                <div className={styles.trending_produto}>
                    <Image src={placeholder} alt="" className={styles.trending_imagem} />
                    <h4 className={styles.trending_nome}>Cama Azul</h4>
                    <button className={styles.trending_botao}>Ver Coleção</button>
                </div>
            </div>
            <Link href="/explore">
                <button className={styles.trending_mais}>Ver mais coleções</button>
            </Link>
        </section>
    )
}

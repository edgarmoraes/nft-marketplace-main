import React from "react"
import Image from 'next/image'
import bg from '../../public/static/img/4.png'
import lr from '../../public/static/img/3.png'
import bgTest from '../../public/static/img/backteste1.jpg'
import ud from '../../public/static/img/2.png'
import du from '../../public/static/img/1.png'
import styles from '../../styles/principal.module.css'


export default function Main() {

    return (

        <section className={styles.main_section}>
            <div className="max-w-[100%]">
                <div className={styles.main_animation}>
                    <div className={styles.img_banner_bg}>
                        <Image src={bg} alt="" />
                    </div>
                    <div className={styles.img_banner_lr}>
                        <Image src={lr} alt="" />
                    </div>
                    <div className={styles.img_banner_ud}>
                        <Image src={ud} alt="" />
                    </div>
                    <div className={styles.img_banner_du}>
                        <Image src={du} alt="" />
                    </div>
                </div>
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.main_texto}>
                <h2 className={styles.apresentacao}>Comece a descobrir, colecionar e comercializar NFTs aqui.</h2>
                <h3 className={styles.apresentacao_texto}>O primeiro marketplace de NFTs da América Latina</h3>
                <div className={styles.botoes_principal}>
                    <a className={styles.a_botao_main_white}><button className={styles.botao_main_white}>Explorar</button></a>
                    <a className={styles.a_botao_main}><button className={styles.botao_main}>Criar seu NFT</button></a>
                </div>
            </div>


        </section>

    )
}


import { useRef } from "react"
import styles from "../../styles/categoria.module.css"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from "next/image";

const cat = {
    cat1: "/static/img/bluebedLogo.png"
}

const Categorias = () => {

    const carousel = useRef(null)

    const handleDragStart = (e) => e.preventDefault();

    const items = [
        <Image width={300} height={300} key = {cat} alt="" className="imagem" src={cat.cat1} onDragStart={handleDragStart} role="presentation" />,
        <Image width={300} height={300} key = {cat} alt="" className="imagem" src={cat.cat1} onDragStart={handleDragStart} role="presentation" />,
        <Image width={300} height={300} key = {cat} alt="" className="imagem" src={cat.cat1} onDragStart={handleDragStart} role="presentation" />,
        <Image width={300} height={300} key = {cat} alt="" className="imagem" src={cat.cat1} onDragStart={handleDragStart} role="presentation" />,
        <Image width={300} height={300} key = {cat} alt="" className="imagem" src={cat.cat1} onDragStart={handleDragStart} role="presentation" />,
        <Image width={300} height={300} key = {cat} alt="" className="imagem" src={cat.cat1} onDragStart={handleDragStart} role="presentation" />,
        <Image width={300} height={300} key = {cat} alt="" className="imagem" src={cat.cat1} onDragStart={handleDragStart} role="presentation" />,
        <Image width={300} height={300} key = {cat} alt="" className="imagem" src={cat.cat1} onDragStart={handleDragStart} role="presentation" />,
        <Image width={300} height={300} key = {cat} alt="" className="imagem" src={cat.cat1} onDragStart={handleDragStart} role="presentation" />,
        <Image width={300} height={300} key = {cat} alt="" className="imagem" src={cat.cat1} onDragStart={handleDragStart} role="presentation" />
        
        
    ]

    const responsive = {
        0: { items: 2 },
        512: { items: 5 },
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.tituloContainer}>
                <h2 className={styles.tituloCategoria}>
                    Pesquisar categorias
                </h2>
            </div>

            <div className={styles.slideContainer}>
                <div className={styles.slider} ref={carousel}>
                
                    <AliceCarousel
                        autoPlay
                        autoPlayStrategy="none"
                        autoPlayInterval={1000}
                        animationDuration={1500}
                        animationType="fadeout"
                        infinite={true}
                        autoHeight={true}
                        autoWidth={true}
                        touchTracking={true}
                        mouseTracking
                        disableDotsControls
                        disableButtonsControls
                        items={items}
                        responsive={responsive}
                    />
                </div>

            </div>

        </div>
    )
}

export default Categorias
import React from "react"

const style = {
    wrapper: "flex justify-between pt-[50px] items-center mb-[50px] min-h-[25vh]",
    textBox: "w-[42vw] flex flex-col justify-center absolute right-[5vw] top-[45vh]",
    apresentacao: "font-inter text-[2.5rem] mb-[1rem] text-[#494866]",
    apresentacaoTexto: "font-inter font-normal text-[1.35rem] mb-[1.5rem]",
    butBox: "flex flex-row justify-between items-center",
    butWhite: "duration-200 ease-in-out w-[15vw] h-[100%] cursor-pointer bg-[#e6e6e6] text-[#2B6CB0] mr-[2em] py-[1em] font-inter text-[1em] border-0 rounded-[5px] shadow-md hover:bg-[#c7c7c7] hover:shadow-xl hover:scale-[1.1]",
    butBlue: "duration-200 ease-in-out w-[15vw] h-[100%] mr-[75px] cursor-pointer bg-[#2B6CB0] text-[#fafafa] ml-[2em] py-[1em] font-inter text-[1em] border-o rounded-[5px] shadow-md hover:bg-[#3e49b8] hover:shadow-xl hover:scale-[1.1]",
    animationMain: "w-[42vw]",
    bannerBg: "z-[2] w-[46vw] ml-[20px] p-[20px] absolute ",
    bannerLr: "z-[3] w-[30vw] absolute left-[5vw] top-[38vh]",
    bannerUd: "z-[4] w-[30vw] absolute left-[15vw]",
    bannerDu: "z-[5] w-[30vw] absolute left-[20vw] top-[45vh] "
}


const Hero = () => {
    return (
        <section className={style.wrapper}>
            <div className={style.textBox}>
                <div>
                    <h2 className={style.apresentacao}>Comece a descobrir, colecionar e comercializar NFTs aqui.</h2>
                    <h3 className={style.apresentacaoTexto}>O primeiro marketplace de NFTs da América Latina</h3>
                    <div className={style.butBox}>
                        <button className={style.butWhite}>Explorar</button>
                        <button className={style.butBlue}>Criar seu NFT</button>
                    </div>
                </div>
            </div>

            <div className={style.animationMain} >
                <img src="/static/img/4.png" alt="" className={style.bannerBg} />
                <img src="/static/img/3.png" alt="" className={style.bannerLr} />
                <img src="/static/img/2.png" alt="" className={style.bannerUd} />
                <img src="/static/img/1.png" alt="" className={style.bannerDu} />  
            </div>
        </section>
    )
}

export default Hero
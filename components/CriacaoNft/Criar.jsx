import react from "react"
import { useMoralisFile, useMoralis } from "react-moralis"
import styles from "../../styles/criar_nft.module.css"
import useNFTcreation from "../../hooks/useNFTcreation"


const Criar = () => {
    const { handleChange, handleSubmit, handleImage, values, errors, selectedImg } = useNFTcreation()
    const { isAuthenticated } = useMoralis()


    /*
    name: ""
    description: ""
    image: ""
    attributes: [{

    }]
    */

    if (isAuthenticated) {
        return (
            <main>
                <section >
                    <form action="" className={styles.crie_nft} method="post" name="new-nft" onSubmit={handleSubmit} >
                        <div className={styles.nft}>
                        </div>
                        <div className={styles.container}>
                            <input type="text"
                                name="name" placeholder="Nome do NFT" id="nft-name" className="form-control form-control-lg"
                                value={values.name} onChange={handleChange}
                                required />
                            {/* <p /><p />
                            <input type="text"
                                name="collectioName" placeholder="Nome da Coleção" id="nft-colecao"
                                className="form-control form-control-lg" required />
                            <p /><p /> 
                            <input type="number"
                                name="price" placeholder="Valor em MATIC" id="nft-valor"
                                className="form-control form-control-lg" required />
                            <p /><p />*/}
                            <input type="text" name="description" placeholder="Descriçao da arte" id="nft-obras"
                                className="form-control form-control-lg"
                                value={values.description} onChange={handleChange} />
                            <p /><p />
                            {/* <label>Royalties (entre 0 e 10)</label>
                                <input type="number" placeholder="Royalties em %" 
                                id="nft-royalties" min="0" max="10" 
                                className={styles.max-w-[15%] border mb-[1rem]" required /> */}
                            <input type="file" accept="image/*"
                                name="image"
                                placeholder="Imagem"
                                id="nft-image" className="form-control form-control-lg" required
                                onChange={handleImage} />
                        </div>
                        <button className={styles.criar_nft} type="submit"> Criar NFT </button>
                    </form>
                </section>
            </main>
        )
    }
    return (
        <section className='min-h-[100vh] flex flex-col justify-center items-center'>
            <h1>É preciso realizar o login.</h1>
        </section>
    )

}

export default Criar
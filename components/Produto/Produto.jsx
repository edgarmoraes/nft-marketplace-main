import React from 'react'

const Produto = () => {
    return (
        <main>
            <section className='min-h-[100vh]'>
                <div className="produto-main">
                    <div className="imagem-nft-produto">

                    </div>
                    <div className="informacoes-nft-produto">
                        <a href="" className="autor-nft">Autor X</a>
                        <h3 className="nome-nft">NFT Z</h3>
                        <h4 className="dono-nft">Vendedor Y</h4>
                        <h4 className="preco-nft">70 MATIC</h4>
                        <div className="botao-comprar">
                            <a href="#" className="comprar-nft">
                                <button className="botao-comprar-nft">Comprar</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="informacoes-extra">
                    <div className="descricao-produto">
                        <h4 className="desc-titulo">Descrição</h4>
                        <div className="descricao-nft">
                            <p className="desc-produto">Descrição da arte NFT</p>
                        </div>
                    </div>
                    <div className="listagens-produto">
                        <h4 className="listagens-titulo">Listagens do produto</h4>
                        <div className="listagens">
                            <p className="listagem-produto">Listagem</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Produto
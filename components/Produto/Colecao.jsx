import React from 'react'
import NFTcollection from './NFTcollecton'

const Colecao = () => {
    return (
        <main>
            <section className="colecao-pg min-h-[100vh]">
                <div className="banner-colecao">
                    <img src="/static/img/logo branca 3.png" alt="" className="banner-colecao-img" />
                </div>
                <div className="main-colecao">
                    <img src="/static/img/bluebed-logo-placeholder-e1647624714802.png" alt="" className="avatar-colecao" />
                    <h3 className="nome-colecao">Unnamed</h3>
                    <h4 className="criador-colecao">Criado por <a className="autor-colecao" href="minha-conta.html">Unnamed</a></h4>
                    <h4 className="desc-colecao">Descrição da coleção</h4>
                </div>
                <div className="navbar-colecao">
                    <div className="botoes-colecao">
                        <h4 className="links-colecao">Itens</h4>
                    </div>
                    <div className="botoes-colecao">
                        <h4 className="links-colecao">Donos</h4>
                    </div>
                    <div className="botoes-colecao">
                        <h4 className="links-colecao">Preço base</h4>
                    </div>
                    <div className="botoes-colecao">
                        <h4 className="links-colecao">Volume negociado</h4>
                    </div>
                </div>
                <div>
                    <NFTcollection />
                </div>
                {/* <a className="link-produto-conta" href="produto.html">
                    <div className="produto-conta">
                        <div className="produto-imagem-conta"></div>
                        <p className="produto-tag-conta">Artes, NFT</p>
                        <p className="produto-nome-conta">Cama Azul #1</p>
                    </div>
                </a> */}
            </section>
        </main>
    )
}

export default Colecao
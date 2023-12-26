import React, { useEffect } from 'react'
import { useMoralis } from 'react-moralis'
import NFTbalance from './NFTbalance'
import { getEllipsisTxt } from "../../src/formatters";


const Conta = () => {

    const { account, isAuthenticated } = useMoralis()
    

    if (isAuthenticated) {
        return (
            <main>
                <section className="minha-conta-pg min-h-[100vh]">
                    <div className="banner">
                        <img src="/static/img/logo branca 3.png" alt="" className="banner-conta" />
                    </div>
                    <div className="main-conta">
                        <img src="/static/img/bluebed-logo-placeholder-e1647624714802.png" alt="" className="avatar-conta" />
                        <h3 className="nome-conta">{getEllipsisTxt(account, 6)}</h3>
                        {/* <h4 className="carteira-conta">{account}</h4> */}
                        <p className="data-conta">Entrou em X de XXXX de XXXX</p>
                    </div>
                    <div className="navbar-conta">
                        <a href="" className="navbar-conta-links">
                            <h4 className="links-conta">Coletados</h4>
                        </a>
                        <a href="" className="navbar-conta-links">
                            <h4 className="links-conta">Criações</h4>
                        </a>
                        <a href="" className="navbar-conta-links">
                            <h4 className="links-conta">Coleções</h4>
                        </a>
                        <a href="" className="navbar-conta-links">
                            <h4 className="links-conta">Favoritos</h4>
                        </a>
                        <a href="" className="navbar-conta-links">
                            <h4 className="links-conta">Wishlist</h4>
                        </a>
                    </div>

                    <NFTbalance />
                    {/* <a className="link-produto-conta">
                    <div className="produto-conta">
                        <div className="produto-imagem-conta"></div>
                        <p className="produto-tag-conta">Artes, NFT</p>
                        <p className="produto-nome-conta">Cama Azul #1</p>
                    </div>

                    <div>
                        <button className="ml-[2rem] border" onClick={() => console.log(isAuthenticated + " " + account)}>Is auth?</button>
                    </div>
                </a> */}
                </section>
            </main>
        )
    }

    return (
        <main>
            <section className="minha-conta-pg">
                <div className="banner">
                    <img src="/static/img/logo branca 3.png" alt="" className="banner-conta" />
                </div>
                <div className="main-conta">
                    <img src="/static/img/bluebed-logo-placeholder-e1647624714802.png" alt="" className="avatar-conta" />
                </div>
            </section>
        </main>
    )
}

export default Conta
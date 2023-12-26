import React from "react"
import { useState, useEffect } from "react"
import styles from "../../styles/navbar.module.css"
import Dropdown from "./Dropdawn";
import Link from 'next/link'
import useLogin from '../../hooks/useLogin'
import Image from "next/image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass, faWallet } from "@fortawesome/free-solid-svg-icons"

import Modal from 'react-bootstrap/Modal'

import { useMoralis } from "react-moralis"

const style = {
    wrapper: `sticky top-0 z-50 bg-[white] shadow-md w-screen px-[1.2rem] py-[0.5rem] flex max-w-[100%]  `,
    logoContainer: `flex items-center cursor-pointer`,
    logoText: ` ml-[0.8rem] text-blue font-semibold text-2xl`,
    searchBar: `flex flex-1 mx-[0.8rem] w-max-[1020px] items-center bg-[#f2f2f2] rounded-[0.8rem] hover:bg-[#dfdfdf]`,
    searchIcon: `text-[#8a939b]  mx-3 font-bold text-lg`,
    searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#00000] placeholder:text-[#8a939b]`,
    headerItems: `flex items-center justify-end`,
    headerItem: `text-[#2B6CB0] px-4 font-bold hover:text-[#2b6cb0cc] cursor-pointer`,
    headerIcon: `text-[#2B6CB0] text-3xl font-black px-4 hover:text-[#2b6cb0cc] cursor-pointer`,
    butWhite: "duration-200 w-[10vw] h-[100%] cursor-pointer bg-[#e6e6e6] text-[#2B6CB0] mr-[2em] py-[0.5em] font-inter text-[1em] border-0 rounded-[5px] shadow-md hover:bg-[#c7c7c7] hover:shadow-xl ",
    butBlue: "duration-200 w-[10vw] h-[100%] mr-[75px] cursor-pointer bg-[#2B6CB0] text-[#fafafa] ml-[2em] py-[0.5em] font-inter text-[1em] border-o rounded-[5px] shadow-md hover:bg-[#2b6cb0cc] hover:shadow-xl",
    inputField: "w-[50%] ml-[0.5rem] border rounded-[0.5rem] pl-[10px] pr-[10px] pb-[1px] pt-[1px]",
    label: "font-bold"

}


// const ModLogin = (props) => {
//     const { login, Moralis } = useMoralis()
//     const { handleChange, values, errors, entrar } = useLogin()

//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
//         <>
//             <div className={style.headerIcon} onClick={handleShow}>
//                 <FontAwesomeIcon icon={faCircleUser} />
//             </div>
//             <Modal show={show} onHide={handleClose} centered>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Entre com sua conta BlueBed.</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <form action="singin" method="post" name="" className="flex flex-col justify-center items-center">
//                         <label className={style.label}>Login</label>
//                         <input type="text" id="login" name="username" value={values.username} onChange={handleChange} required className={style.inputField} />
//                         <label className={style.label}>Senha</label>
//                         <input type="password" id="password" name="password" value={values.password} onChange={handleChange} required className={style.inputField} />
//                     </form>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Link href="/create-account">
//                         <button className={style.butWhite} onClick={handleClose}>
//                             Cadastre-se
//                         </button>
//                     </Link>
//                     <button className={style.butBlue} onClick={entrar}>
//                         Entrar
//                     </button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     )
// }


export default function Header() {

    const { isWeb3Enabled, enableWeb3, isAuthenticated, Moralis, account, chainId, logout, authenticate } = useMoralis()
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    useEffect(() => {
        if (isAuthenticated === true && isWeb3Enabled === false) {
            enableWeb3()
            console.log("teste")
        }
    }
        , [isWeb3Enabled, isAuthenticated])

    const connect = () => {
        authenticate()
    }

    useEffect(() => {
        if (isAuthenticated) {
            Moralis.onAccountChanged(async (accounts) => {
                alert("Voce foi desconectado.")
                logout()
            })
        }
    }, [isAuthenticated])


    if (isAuthenticated) {
        return (
            <div className={styles.navbar_font}>
                <nav className={styles.navbar}>
                    <Link href={"/"} passHref>
                        <div className={styles.navbar_logo} onClick={closeMobileMenu}>
                            BlueBed
                        </div>
                    </Link>
                    <div className={style.searchBar}>
                        <div className={style.searchIcon}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                        <input className={style.searchInput}
                            placeholder="Buscar" />
                    </div>
                    <i className={styles.fa_firstdraft} />
                    <div className={styles.menu_icon} onClick={handleClick}>
                        <i className={click ? `${styles.fa_times}` : `${styles.fa_bars} `} />
                    </div>
                    <ul className={click ? `${styles.nav_menu} active` : `${styles.nav_menu}`}>
                        <li className={styles.nav_item}>

                            {/* <Link href={"/"} passHref>
                                <div className={styles.nav_links} onClick={closeMobileMenu}>
                                    Home
                                </div>
                            </Link> */}

                        </li>
                        <li
                            className={styles.nav_item}
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                        >
                            <Link href={"/explore"} passHref>

                                <div className={styles.nav_links} onClick={closeMobileMenu}>
                                    Explorar
                                </div>
                            </Link>
                            <i className={styles.fa_caret_down} />

                        </li>
                        <li className={styles.nav_item}>
                            <Link href={"/create-nft"} passHref>
                                <div className={styles.nav_links} onClick={closeMobileMenu}>
                                    Crie seu NFT
                                </div>
                            </Link>
                        </li>
                        <li className={styles.nav_item}>
                            <Link href={"/about"} passHref>
                                <div className={styles.nav_links} onClick={closeMobileMenu}>
                                    Sobre Nós
                                </div>
                            </Link>
                        </li>
                        <li className={styles.nav_item}>
                            <div
                                onClick={closeMobileMenu}
                            >
                                <Link href='/account'>
                                    <div>
                                        <img src="/static/img/bluebed-logo-placeholder-e1647624714802.png"
                                            className="rounded-full h-[30px] w-[30px] cursor-pointer" />
                                    </div>
                                </Link>
                                <div>
                                    <button className="border bg-white" onClick={logout}>Log Out</button>
                                </div>
                            </div>
                        </li>

                    </ul>
                </nav>
            </div>
        )
    }

    return (
        <div className={styles.navbar_font}>
            <nav className={styles.navbar}>
                <Link href={"/"} passHref>
                    <div className={styles.navbar_logo} onClick={closeMobileMenu}>
                        BlueBed
                    </div>
                </Link>
                <div className={style.searchBar}>
                    <div className={style.searchIcon}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                    <input className={style.searchInput}
                        placeholder="Buscar" />
                </div>
                <i className={styles.fa_firstdraft} />
                <div className={styles.menu_icon} onClick={handleClick}>
                    <i className={click ? `${styles.fa_times}` : `${styles.fa_bars} `} />
                </div>
                <ul className={click ? `${styles.nav_menu} active` : `${styles.nav_menu}`}>
                    <li className={styles.nav_item}>

                        {/* <Link href={"/"} passHref>
                            <div className={styles.nav_links} onClick={closeMobileMenu}>
                                Home
                            </div>
                        </Link> */}

                    </li>
                    <li
                        className={styles.nav_item}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link href={"/explore"} passHref>

                            <div className={styles.nav_links} onClick={closeMobileMenu}>
                                Explorar
                            </div>
                        </Link>
                        <i className={styles.fa_caret_down} />

                    </li>
                    <li className={styles.nav_item}>
                        <Link href={"/create-nft"} passHref>
                            <div className={styles.nav_links} onClick={closeMobileMenu}>
                                Crie seu NFT
                            </div>
                        </Link>
                    </li>
                    <li className={styles.nav_item}>
                        <Link href={"/about"} passHref>
                            <div className={styles.nav_links} onClick={closeMobileMenu}>
                                Sobre Nós
                            </div>
                        </Link>
                    </li>
                    <li className={styles.nav_item}>
                        <div
                            onClick={closeMobileMenu}
                        >
                            <div className={style.headerIcon}>
                                <FontAwesomeIcon icon={faCircleUser} onClick={() => connect()} />
                                {/* <ModLogin /> */}
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

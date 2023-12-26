import Head from "next/head"
import Header from "../components/Geral/Header"
// import Hero from "../components/Hero"
import Categorias from "../components/Home/Categorias"
import Main from "../components/Home/Main"
import Artes from "../components/Home/Artes"
import Trending from "../components/Home/Trending"
import Sobre from "../components/Home/Sobre"
import Populares from "../components/Home/Populares"
import Artigos from "../components/Home/Artigos"
import Footer from "../components/Geral/Footer"


export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <title>BlueBed - Marketplace de NFTs</title>
        <meta type="desc" content="Descrição do Site" />
        <meta name="viewport" content="width=device-width initial-scale=1.0" />
      </Head>

      <div className="max-w-[100%]"> 
          <Header />
          <Main />
          <Categorias />
          <Artes />
          <Trending />
          <Sobre />
          <Populares />
          <Artigos />
          <Footer />
      </div>
    </>
  )
}

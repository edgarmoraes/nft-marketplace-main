import Head from "next/head"
import Header from "../components/Geral/Header"
import VendaTeste from "../components/Venda/VendaTeste"
import Footer from "../components/Geral/Footer"


export default function Account() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <title>BlueBed - Marketplace de NFTs</title>
        <meta type="desc" content="Descrição do Site" />
        <meta name="viewport" content="width=device-width initial-scale=1.0" />
      </Head>

      <div>
        <Header />
        <VendaTeste />
        <Footer />
      </div>
    </>
  )
}

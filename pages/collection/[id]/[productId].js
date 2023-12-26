import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Head from "next/head"
import Link from "next/link"
import Header from "../../../components/Geral/Header"
import Footer from "../../../components/Geral/Footer"

import { useMoralisWeb3Api, useMoralisWeb3ApiCall, useMoralis } from "react-moralis"
import { useVerifyMetadata } from "../../../hooks/useVerifyMetadata"
import { useIPFS } from '../../../hooks/useIPFS'
import { Card } from "react-bootstrap"

export default function Product() {
    const router = useRouter()
    const [data, setData] = useState([])
    const [metaData, setMetaData] = useState([])

    const id = router.query.id
    const productId = router.query.productId

    const Web3Api = useMoralisWeb3Api()
    const { chainId, isInitialized } = useMoralis()
    const { verifyMetadata } = useVerifyMetadata()
    const { resolveLink } = useIPFS()

    const options = {
        address: id,
        token_id: productId,
        chain: "eth"
    }

    const fetchTokenIdMetadata = async (options) => {
        const NFTs = await Web3Api.token.getTokenIdMetadata(options)
        return NFTs
    }

    useEffect(() => {
        if (isInitialized && id != undefined && productId != undefined) {
            fetchTokenIdMetadata(options)
                .then((res) => {
                    setData(res)
                    setMetaData(JSON.parse(res?.metadata))
                    console.log(res)
                })
        }
    }, [isInitialized, id, productId])


    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <title>BlueBed - Marketplace de NFTs</title>
                <meta type="desc" content="Descrição do Site" />
                <meta name="viewport" content="width=device-width initial-scale=1.0" />
            </Head>
            <Header />
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Img variant="top" src={resolveLink(metaData.image)}>
                        </Card.Img>
                        <Card.Title>
                            {data.token_id}
                        </Card.Title>
                        <Card.Text>
                            <Link href={`https://etherscan.io/address/${id}`}>
                                Ver no Etherscan
                            </Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <Footer />
        </>
    )
}
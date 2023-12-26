import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Head from "next/head"
import Link from "next/link"
import Header from "../../components/Geral/Header"
import Footer from "../../components/Geral/Footer"

import { useMoralisWeb3Api, useMoralis } from "react-moralis"
import { useVerifyMetadata } from "../../hooks/useVerifyMetadata"
import { useIPFS } from '../../hooks/useIPFS'
import { Card } from "react-bootstrap"

const Collection = () => {
    const [data, setData] = useState([])

    const router = useRouter()
    const id = router.query.id

    const Web3Api = useMoralisWeb3Api()
    const { chainId, isInitialized } = useMoralis()
    const { verifyMetadata } = useVerifyMetadata()
    const { resolveLink } = useIPFS()

    const options = {
        address: id,
        chain: "eth",
        limit: 5
    }

    const fetchAllTokenIds = async (options) => {
        const NFTs = await Web3Api.token.getAllTokenIds(options)
        return NFTs
    }

    useEffect(() => {
        if (isInitialized && id !== undefined) {
            fetchAllTokenIds(options)
                .then((res) => {
                    setData(res.result)

                }).then(console.log(data))
        }
    }, [isInitialized, id])

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
                {data.map((nft, index) => {
                    nft = verifyMetadata(nft)
                    return (
                        <Card style={{ width: '18rem' }} key={index}>
                            <Card.Body>
                                <Card.Img variant="top" src={resolveLink(JSON.parse(nft.metadata).image)}>
                                </Card.Img>
                                <Card.Title>
                                    <Link href={`${id}/${nft.token_id}`}>
                                        {nft.token_id}
                                    </Link>
                                </Card.Title>
                                {/* <Card.Text>
                                    {resolveLink(JSON.parse(nft.metadata).image)}
                                </Card.Text> */}
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
            <Footer />
        </>
    )
}

export default Collection
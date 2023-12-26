import React from "react"
import { useMoralisWeb3Api, useMoralisWeb3ApiCall, useMoralis } from "react-moralis"
import { useVerifyMetadata } from "../../hooks/useVerifyMetadata"
import { Card } from "react-bootstrap"



const NFTcollection = () => {

    const options = {
        address: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
        chain: "eth",
        limit: 10
    }

    const Web3Api = useMoralisWeb3Api()
    const { chainId } = useMoralis()
    const { verifyMetadata } = useVerifyMetadata()


    const fetchAllTokenIds = async (options) => {
        const NFTs = await Web3Api.token.getAllTokenIds(options)
        return NFTs
    }

    return (
        <div>

            <div>
                <button className="border" onClick={() => {
                    fetchAllTokenIds(options)
                        .then((r) => console.log(r))
                }}>Test function</button>

            </div>

            {/* <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Img variant="top" src={NFTTokenIds[0]?.image} />
                    <Card.Title>Teste</Card.Title>
                    <Card.Text>
                        -
                    </Card.Text>
                </Card.Body>
            </Card> */}
        </div>
    )
}

export default NFTcollection
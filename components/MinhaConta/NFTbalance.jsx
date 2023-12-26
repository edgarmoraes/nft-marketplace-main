import React, { useEffect } from "react"
import { useMoralis, useNFTBalances } from "react-moralis"
import { useVerifyMetadata } from "../../hooks/useVerifyMetadata"
import { Card } from "react-bootstrap"

const style = {
    wrapper: "mb-[2rem] top-[100vh] max-w-[100%]",
    slideContainer: "m-[2rem] scroll-smooth snap-x snap-mandatory flex",
    slider: "flex srhink-0 flex gap-6 overflow-x-hidden scroll-smooth snap-x snap-center"
}

const NFTbalance = () => {
    const { data: NFTBalances } = useNFTBalances()
    const { Moralis, chainId } = useMoralis()
    const { verifyMetadata } = useVerifyMetadata()

    const fallbackImg ="static/img/bluebedLogo.png"

    //console.log("NFTBalances", NFTBalances);
    return (
        <section>
            <div className="grid grid-rows-4 grid-flow-col gap-4 justify-center">
                {NFTBalances?.result &&
                    NFTBalances.result.map((nft, index) => {
                        //Verify Metadata
                        nft = verifyMetadata(nft);
                        return (
                            <Card style={{ width: '18rem' }} key={index}>
                                <Card.Body>
                                    <Card.Img variant="top" src={nft.image} />
                                    <Card.Title>{nft.name}</Card.Title>
                                    <Card.Text>
                                        {nft?.token_uri}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        );
                    })
                }
            </div>
        </section>
    )
}

export default NFTbalance
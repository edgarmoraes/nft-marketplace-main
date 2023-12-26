import React from "react"
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis"

const style = {
    button: "duration-200 w-[10vw] h-[100%] cursor-pointer bg-[#2B6CB0] text-[#fafafa] py-[0.5em] font-inter text-[1em] border-o rounded-[5px] shadow-md hover:bg-[#2b6cb0cc] hover:shadow-xl"
}

const CriarTeste = () => {
    const { isAuthenticated, Moralis, chainId } = useMoralis()
    const contractProcessor = useWeb3ExecuteFunction()

    let options = {
        contractAddress: "0x14737F313F55b29468B3DE3223EF9c26dB9416e5",
        functionName: "safeMint",
        abi: [{
            "inputs": [
                {
                    "internalType": "string",
                    "name": "uri",
                    "type": "string"
                }
            ],
            "name": "safeMint",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        }],
        params: {
            uri: "https://gateway.ipfs.io/ipfs/QmcBM9o2ZeC6aeNED7C4xjqHhHS5eYBQXsuDZyKVMa1FrZ",
        },
        msgValue: Moralis.Units.ETH(0.000001)
    }

    const mint = async () => {
        await contractProcessor.fetch({
            params: options,
            onSuccess: () => {
                alert("NFT minted.")
            }
        })
    }

    if (isAuthenticated) {
        return (
            <section className="min-h-[100vh] flex justify-center items-center">
                <div className="items-center flex flex-col justify-center">
                    <h1> Mintar NFT </h1>
                    <button
                        className={style.button}
                        onClick={() => mint()}> Mintar </button>
                </div>
            </section>
        )
    }

    return (
        <section className='min-h-[100vh] flex flex-col justify-center items-center'>
            <h1>É preciso realizar o login.</h1>
        </section>
    )
}

export default CriarTeste
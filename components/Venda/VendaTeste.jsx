import React from "react"
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis"
import useMarket from "../../hooks/useMarket"

const style = {
    label: "font-inter",
    inputField: " border rounded-[0.5rem] pl-[10px] pr-[10px] pb-[1px] pt-[1px] mb-[1rem]",
    button: "border mb-[2rem]"
}

const VendaTeste = () => {

    const { isAuthenticated, Moralis, chainId } = useMoralis()
    const contractProcessor = useWeb3ExecuteFunction()

    const { handleChange, values } = useMarket()

    const marketAddress = "0x76b853e93bbE7b6dB18DC6dfb91992c0a81ae3D7"

    let options = {
        "setApproved": {
            contractAddress: values.nftAddress,
            functionName: "setApprovalForAll",
            abi: [{
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "approved",
                        "type": "bool"
                    }
                ],
                "name": "setApprovalForAll",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }],
            params: {
                operator: marketAddress,
                approved: true
            }
        },

        "listItem": {
            contractAddress: marketAddress,
            functionName: "makeItem",
            abi: [{
                "inputs": [
                    {
                        "internalType": "contract ERC721",
                        "name": "_nft",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_price",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "creatorFee",
                        "type": "uint256"
                    }
                ],
                "name": "makeItem",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }],
            params: {
                _nft: values.nftAddress,
                _tokenId: values.tokenIdCriar,
                _price: Moralis.Units.ETH(values.price),
                creator: values.creator,
                creatorFee: values.creatorFee
            }
        },

        "buyItem": {
            contractAddress: marketAddress,
            functionName: "buyItem",
            abi: [{
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_itemId",
                        "type": "uint256"
                    }
                ],
                "name": "buyItem",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },],
            params: {
                _itemId: values.marketItemIdComprar
            },
            msgValue: Moralis.Units.ETH(values.sendValue)
        },

        "cancelListing": {
            contractAddress: marketAddress,
            functionName: "cancelItem",
            abi: [{
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_itemId",
                        "type": "uint256"
                    }
                ],
                "name": "cancelItem",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }],
            params: {
                _itemId: values.marketItemIdCancelar
            }
        },

        "getCreator": {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_itemId",
                    "type": "uint256"
                }
            ],
            "name": "getCreator",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    }


    const setApproved = async () => {

        await contractProcessor.fetch({
            params: options.setApproved,
            onSuccess: () => {
                alert(" - Success!")
            }
        })
    }

    const createSale = async () => {

        await contractProcessor.fetch({
            params: options.listItem,
            onSuccess: () => {
                alert(" - Success!")
            }
        })
    }

    const cancelSale = async () => {

        await contractProcessor.fetch({
            params: options.cancelListing,
            onSuccess: () => {
                alert(" - Success!")
            }
        })
    }

    const buyItem = async () => {

        await contractProcessor.fetch({
            params: options.buyItem,
            onSuccess: () => {
                alert(" - Success!")
            }
        })
    }

    const getCreator = async () => {
        await contractProcessor.fetch({
            params: options.getCreator
        }).then(console.log(contractProcessor))
    }

    if (isAuthenticated) {
        return (
            <section className="min-h-[100vh] flex flex-col justify-center items-center">
                <div className="flex flex-col">
                    <h2>Set Approved</h2>
                    <label className={style.label}>Enedereço do contrato da NFT:</label>
                    <input type="text" id="nftAddress"
                        name="nftAddress" value={values.nftAddress} className={style.inputField}
                        onChange={handleChange}></input>
                    <button className={style.button} onClick={() => setApproved()}>setApprovalForAll</button>

                    <h2>Criar oferta</h2>
                    <label className={style.label}>Token Id:</label>
                    <input type="number" id="tokenIdCriar"
                        name="tokenIdCriar" value={values.tokenIdCriar} className={style.inputField}
                        onChange={handleChange}></input>
                    <label className={style.label}>Preço:</label>
                    <input type="number" id="price"
                        name="price" value={values.price} className={style.inputField}
                        onChange={handleChange}></input>
                    <label className={style.label}>Carteira do criador:</label>
                    <input type="text" id="creator"
                        name="creator" value={values.creator} className={style.inputField}
                        onChange={handleChange}></input>
                    <label className={style.label}>Royalties:</label>
                    <input type="number" id="creatorFee"
                        name="creatorFee" value={values.creatorFee} className={style.inputField}
                        onChange={handleChange}></input>
                    <button className={style.button} onClick={() => createSale()}>Confirmar</button>

                    <h2>Cancelar Listagem</h2>
                    <label className={style.label}>Market item Id:</label>
                    <input type="number" id="marketItemIdCancelar"
                        name="marketItemIdCancelar" value={values.marketItemIdCancelar} className={style.inputField}
                        onChange={handleChange}></input>
                    <button className={style.button} onClick={() => cancelSale()}>Confirmar</button>

                    <h2>Comprar NFT</h2>
                    <label className={style.label}>Market item Id</label>
                    <input type="number" id="marketItemIdComprar"
                        name="marketItemIdComprar" value={values.marketItemIdComprar} className={style.inputField}
                        onChange={handleChange}></input>
                    <label className={style.label}>Valor:</label>
                    <input type="number" id="sendValue" name="sendValue" value={values.sendValue} className={style.inputField}
                        onChange={handleChange}></input>
                    <button className={style.button} onClick={() => buyItem()}>Confirmar</button>

                    <h2>Teste Get</h2>
                    <button className={style.button} onClick={() => getCreator()}>testar</button>

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

export default VendaTeste
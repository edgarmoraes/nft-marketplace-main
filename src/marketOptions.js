const marketAddress = "0x76b853e93bbE7b6dB18DC6dfb91992c0a81ae3D7"

export const options = {
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
            _price: values.price,
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
    }
}
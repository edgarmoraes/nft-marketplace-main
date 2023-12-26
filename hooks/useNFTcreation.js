import { useState, useEffect, useRef } from 'react';
import { useMoralis, useMoralisFile, useWeb3ExecuteFunction, Moralis } from 'react-moralis';

const useNFTcreation = () => {

  //------------------------- Upload files -------------------------
  const { saveFile } = useMoralisFile()
  const [values, setValues] = useState({
    name: '',
    description: '',
    image: ''
  });
  const [errors, setErrors] = useState({});
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null)

  const handleImage = e => {
    console.log(e.target.files[0])
    setSelectedImg(e.target.files[0])
    console.log("value on selectedImg", selectedImg)
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  const uploadFile = (obj, img) => {
    console.log('Starting upload...')
    const imgUrl = ''
    saveFile(
      img.name,
      img,
      {
        type: 'image',
        saveIPFS: true,
        onSuccess: (result) => imgUrl = result.ipfs(),
        onError: (error) => console.log(error),
        onComplete: () => {
          obj.image = imgUrl
          const base64 = Buffer.from(JSON.stringify(obj)).toString('base64')
          saveFile(
            "metadata.json",
            { base64 },
            {
              type: "base64",
              saveIPFS: true,
              onSuccess: (result) => {
                console.log("URL dos metadados upados: ", result.ipfs())
                options.params.uri = result.ipfs()
                mint()
                // return (result.ipfs())
              },
              onError: (error) => console.log(error),
            }
          )
        }
      }
    )
    // await contractProcessor.fetch({
    //   params: op,
    //   onSuccess: () => {
    //     alert("NFT minted.")
    //   }
    // })
  }
  //----------------------------------------------------------------

  //--------------------------- Mint NFT ---------------------------
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
      uri: "",
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

  //----------------------------------------------------------------

  const handleSubmit = e => {
    e.preventDefault();
    uploadFile(values, selectedImg)
    // setErrors(validate(values));
    // setIsSubmitting(true);
  }

  useEffect(
    () => {
      if (Object.keys(errors).length === 0) {

      }
    },
    [errors]
  )

  return { handleChange, handleSubmit, handleImage, values, errors, selectedImg };
}

export default useNFTcreation;
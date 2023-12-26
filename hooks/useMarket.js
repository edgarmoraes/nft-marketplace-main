import { useState, useEffect } from 'react';
import { useMoralis } from 'react-moralis';

const useMarket = () => {
  const [values, setValues] = useState({
    nftAddress: '',
    tokenIdCriar: '',
    price: 0,
    creator:'',
    creatorFee: '',
    marketItemIdCancelar: '',
    marketItemIdComprar: '',
    sendValue: 0
  });
  const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    // setIsSubmitting(true);

  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0) {
        
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useMarket;
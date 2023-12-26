import { useState, useEffect } from 'react';
import { useMoralis } from 'react-moralis';

const useForm = (validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    cemail: '',
    password: '',
    cpassword: ''
  });
  const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

const { signup } = useMoralis()

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
        signup(values.username, values.password, values.email)
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
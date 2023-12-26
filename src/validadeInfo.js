export default function validateInfo(values) {
    let errors = {};

    if (!values.username.trim()) {
        errors.username = 'Informe um login.';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }

    if (!values.email) {
        errors.email = 'Informe um email.';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email inválido.';
    }

    if (!values.cemail) {
        errors.cemail = 'Informe um email.';
    } else if (!/\S+@\S+\.\S+/.test(values.cemail)) {
        errors.cemail = 'Email inválido.';
    } else if (values.cemail !== values.email) {
        errors.cemail = 'Emails não são iguais.';
    }

    if (!values.password) {
        errors.password = 'Informe uma senha';
    } else if (values.password.length < 6) {
        errors.password = 'A senha precisa ter 6 caracteres ou mais.';
    }

    if (!values.cpassword) {
        errors.cpassword = 'Informe uma senha';
    } else if (values.cpassword !== values.password) {
        errors.cpassword = 'As senhas não são iguais.';
    }

    return errors;
}
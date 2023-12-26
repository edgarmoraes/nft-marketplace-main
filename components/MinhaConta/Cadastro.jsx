import React from 'react'
import { useState } from 'react'
import useCadastro from '../../hooks/useCadastro'
import validate from '../../src/validadeInfo'
import { useMoralis } from 'react-moralis'

const style = {
    label: "",
    inputField: "w-[20%] border rounded-[0.5rem] pl-[10px] pr-[10px] pb-[1px] pt-[1px]",
    butBlue: "duration-200 w-[10vw] h-[100%] mr-[75px] cursor-pointer bg-[#2B6CB0] text-[#fafafa] ml-[2em] py-[0.5em] font-inter text-[1em] border-o rounded-[5px] shadow-md hover:bg-[#2b6cb0cc] hover:shadow-xl",
}


const Cadastro = () => {

    const { handleChange, values, handleSubmit, errors } = useCadastro(validate)

    const { isAuthenticated, logout } = useMoralis()

    if (isAuthenticated) {
        return (
            <section>
                <div className='flex justify-center items-center min-h-[100vh]'>
                    <h1 className='font-inter mt-[20px]'>Você já está logado.</h1>
                    <button onClick={() => logout()}>Logout</button>
                </div>
            </section>
        )
    }

    return (
        <section>
            <div className='min-h-[100vh]'>
                <h1 className='font-inter mt-[20px] ml-[20px]'>Criar conta BlueBed</h1>
                <div>
                    <form action='singup' method='post' onSubmit={handleSubmit} className="flex flex-col mb-[20px] ml-[20px]">
                        <div className="flex flex-col mb-[20px]">
                            <label htmlFor='username' className={style.label}>Login</label>
                            <input type="text" id="username" name="username" value={values.username} onChange={handleChange} className={style.inputField} />
                            {errors.username && <p>{errors.username}</p>}

                            <label htmlFor='email' className={style.label}>E-mail</label>
                            <input type="email" id='email' name='email' placeholder='email@domain.com' value={values.email} onChange={handleChange} className={style.inputField}></input>
                            {errors.email && <p>{errors.email}</p>}

                            <label htmlFor='cemail' className={style.label}>Confirme seu e-mail</label>
                            <input type="email" id='cemail' name='cemail' placeholder='email@domain.com' value={values.cemail} onChange={handleChange} className={style.inputField}></input>
                            {errors.cemail && <p>{errors.cemail}</p>}

                            <label htmlFor='password' className={style.label}>Senha</label>
                            <input type="password" id='password' name='password' value={values.password} onChange={handleChange} className={style.inputField}></input>
                            {errors.password && <p>{errors.password}</p>}

                            <label htmlFor='cpassword' className={style.label}>Confirme sua senha</label>
                            <input type="password" id='cpassword' name="cpassword" value={values.cpassword} onChange={handleChange} className={style.inputField}></input>
                            {errors.cpassword && <p>{errors.cpassword}</p>}

                        </div>
                        <div className=''>
                            <button className={style.butBlue} type='submit'>Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Cadastro
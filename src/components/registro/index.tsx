import { useContext } from "react";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'


import { Container, DivLogo, Cadastro } from "./styled";
import { CadastroContext } from "../../contexts/cadastro/contextCadastro";

const Register = () => {

    const {eyeValue, value, navigate, register, handleSubmit, errors, onSubmit, viewPassword} = useContext(CadastroContext)

    return (
        <Container>
            <DivLogo>
                <h1>Kenzie Hub</h1>
                <button onClick={() => navigate('/')}>Voltar</button>
            </DivLogo>
            <Cadastro onSubmit={handleSubmit(onSubmit)} >
                <h3>Crie sua conta</h3>
                <span>Rapido e gratís, vamos nessa</span>
                <div className="infos">
                    <div>
                        <label htmlFor="name">Nome</label>
                        <span>{errors.name?.message}</span>
                    </div>
                    <input type="text" placeholder="Digite aqui seu nome" {...register('name')} />
                    <div>
                        <label htmlFor="email">Email</label>
                        <span>{errors.email?.message}</span>
                    </div>
                    <input type="email" placeholder="Digite aqui seu email" {...register('email')} />
                    <div>
                        <label htmlFor="password">Senha</label>
                        <span>{errors.password?.message}</span>
                    </div>
                    <div className="eyes-style">
                        <input type={eyeValue} className="input-eyes" placeholder="Digite aqui sua senha" {...register('password')} />
                        <a onClick={() => viewPassword()}>{
                            value ?
                            <AiFillEyeInvisible/>
                            : <AiFillEye/>
                            }</a>
                    </div>
                    <div>
                        <label htmlFor="passwordConfirmed">Confirmar Senha</label>
                        <span>{errors.passwordConfirmed?.message}</span>
                    </div>
                    <div className="eyes-style">
                        <input type={eyeValue} className="input-eyes" placeholder="Digite novamente sua senha" {...register('passwordConfirmed')} />
                        <a onClick={() => viewPassword()}>{
                            value ?
                            <AiFillEyeInvisible/>
                            : <AiFillEye/>
                            }</a>
                    </div>
                    <div>
                        <label htmlFor="bio">Bio</label>
                        <span>{errors.bio?.message}</span>
                    </div>
                    <textarea name="bio" id="bio" cols="40" rows="2" placeholder="Fale sobre você" {...register('bio')}></textarea>
                    <div>
                        <label htmlFor="contato">Contato</label>
                        <span>{errors.contact?.message}</span>
                    </div>
                    <input type="text" placeholder="Digite aqui seu numero de contato" {...register('contact')} />
                    
                    <label htmlFor="modulo">Selecionar Modulo</label>
                    <select placeholder="select" {...register('course_module')} id="modulo">
                        <option value="Primeiro Módulo (Introdução ao Frontend)">Primeiro Módulo (Introdução ao Frontend)</option>
                        <option value="Segundo Módulo (Frontend Avançado)">Segundo Módulo (Frontend Avançado)</option>
                        <option value="Terceiro Módulo (Introdução ao Backend)">Terceiro Módulo (Introdução ao Backend)</option>
                        <option value="Quarto Módulo (Backend Avançado)">Quarto Módulo (Backend Avançado)</option>
                    </select>
                </div>
                <button type="submit" >Cadastrar</button>
            </Cadastro>
        </Container>
    )
};

export default Register;
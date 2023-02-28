import { motion } from "framer-motion";

import { useContext} from "react";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

import { Container, DivImputs } from "./styled";
import { GlobalContext } from "../../contexts/globalcontext";
import { LoginContext } from "../../contexts/loginContext/loginContext";

const Login = () => {

    const {navigate} = useContext(GlobalContext)
    // ======================================================

    const {value, eyeValue, eyePassword, register, handleSubmit, submitLogin, errors} = useContext(LoginContext)

    

    return (
        <Container>
            <motion.h1
            initial={{y: -100, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            exit={{opacity: 0}}
            transition={{type: 'spring', damping: 5.5,duration: 4, delay: 1}}
            >Kenzie Hub</motion.h1>
            <motion.form
            className="login"
            initial={{y: -100, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            exit={{opacity: 0}}
            transition={{type: 'spring', duration: 2}}
            onSubmit={handleSubmit(submitLogin)}
            >
                <p>Login</p>
                <DivImputs>
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email"
                    {...register('email')}
                    />
                    <span className="err">{errors.email?.message}</span>
                </DivImputs>
                <DivImputs>
                    <label htmlFor="password">Password</label>
                    <div className="eyes-style">
                        <input type={eyeValue} className="input-eyes" {...register('password')} />
                        <a onClick={() => eyePassword()}>{
                            value ?
                            <AiFillEyeInvisible/>
                            : <AiFillEye/>
                            }</a>
                    </div>
                    <span className="err">{errors.password?.message}</span>
                </DivImputs>
                <button type="submit">Entrar</button>
                <span>Ainda não possui conta?</span>
                <button type="button" 
                onClick={() => navigate('/register')}
                className="cadastro" 
                >Cadastre-se</button>
            </motion.form>
        </Container>
    )
};

export default Login;
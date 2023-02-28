import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../servers/api";
import { GlobalContext } from "../globalcontext";

interface ILoginForm {
    children: ReactNode;
}

interface ILoginContext {
    value: boolean;
    eyeValue: string;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
    setEyeValue: React.Dispatch<React.SetStateAction<string>>;
    eyePassword: () => void;
    register: any;
    handleSubmit: any;
    submitLogin: (data: any) => void;
    errors: any;
}

export const LoginContext = createContext({} as ILoginContext)

const LoginProvider = ({children}: ILoginForm) => {
    
    const {setUser, setTechs, navigate} = useContext(GlobalContext)

    const [value, setValue] = useState(false)
    const [eyeValue, setEyeValue] = useState('password')

    function eyePassword() {
        if (value === true) {
            setEyeValue('password')
            setValue(false)
        } else {
            setValue(true)
            setEyeValue('text')
        }
    }

    const schema = yup.object().shape({
        email: yup.string().email().required('Email obrigatorio!'),
        password: yup.string().required('Senha obrigatoria')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const submitLogin = (data: any) => {
        api.post('/sessions', data)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('id', res.data.user.id)
                toast.success('Login feito com sucesso!')
                setUser(res.data.user)
                setTechs(res.data.user.techs)
                navigate('/home')
            })
            .catch(err => {
                console.log(err)
                toast.error('Email ou senha errados!')
            })

    }

    return (
        <LoginContext.Provider value={{value, eyeValue, setValue, setEyeValue, eyePassword, register, handleSubmit, submitLogin, errors}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider
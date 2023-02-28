import { createContext, ReactNode, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from "react-toastify";
import api from "../../servers/api";

interface ICadastroForm {
    children: ReactNode;
}

interface ICadastroContext {
    eyeValue: string; 
    value: boolean; 
    navigate: NavigateFunction; 
    register: any; 
    handleSubmit: any; 
    errors: any; 
    onSubmit: (data: any) => void; 
    viewPassword: () => void;
}

// {"id":"ecde43f2-3e94-4cbe-aca8-efa04ca437b3",
// "name":"David Kauan","email":"david@gmail.com",
// "course_module":"Quarto Módulo (Backend Avançado)",
// "bio":"gosto de estudar","contact":"999541833",
// "created_at":"2022-08-25T21:26:24.826Z",
// "updated_at":"2022-08-25T21:26:24.826Z",
// "avatar_url":null}

interface IUserCadastro {
    bio: string;
    contact: string;
    course_module: string;
    email: string;
    password: string;
    passwordConfirmed: string;
}

export const CadastroContext = createContext({} as ICadastroContext)

const CadastroProvider = ({children}: ICadastroForm) => {
    
    const [value, setValue] = useState(false)
    const [eyeValue, setEyeValue] = useState('password')

    const navigate = useNavigate()

    const cadastroSchema = yup.object().shape({
        name: yup.string().required('Esta faltando o nome!'),
        email: yup.string().email().required('Está faltando o email!'),
        password: yup.string().required('Senha obrigatoria!').min(6, 'É necessario pelo menos 6 caracteres'),
        passwordConfirmed: yup.string().oneOf([yup.ref('password'), ], 'As senhas não são iguais!'),
        bio: yup.string().required('Digite algo para sua bio ;)'),
        contact: yup.string().required('É preciso uma forma de contato!'),
        course_module: yup.string().required()
    })
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(cadastroSchema)
    })

    const onSubmit = (data: IUserCadastro) => {
        api.post('/users', data)
        .then(res => {
                navigate('/login')
                toast.success('Cadastro feito com sucesso! Agora basta logar.')
            })
            .catch(err => {
                console.log(err)
                navigate('/register')
                toast.error('Algo deu errado!')
            })
            
    }

    function viewPassword() {
        if (value === true) {
            setEyeValue('password')
            setValue(false)
        } else {
            setValue(true)
            setEyeValue('text')
        }
    }

    return (
        <CadastroContext.Provider value={{eyeValue, value, navigate, register, handleSubmit, errors, onSubmit, viewPassword}}>
            {children}
        </CadastroContext.Provider>
    )
}

export default CadastroProvider
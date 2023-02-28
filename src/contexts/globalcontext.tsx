import { createContext, ReactNode, useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../servers/api";

interface IGlobalChildren {
    children: ReactNode;
}

interface ITechs {
    id: string;
    title: string;
    status: string;
    created_at: Date;
    updated_at: Date;
}

interface IUser {
    id: string;
    name: string;
    email: string;
    course_module: string;
    bio: string;
    contact: string;
    avatar_url: string;
    techs?: ITechs[];
    created_at: Date;
    updated_at: Date;
}

interface IGlobalContext {
    user:  IUser | null;
    techs: ITechs[];
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
    setTechs: React.Dispatch<React.SetStateAction<never[]>>;
    navigate: NavigateFunction;
    automaticLogin: void;
    verificaçãoToken: void;
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    removeTech: any;
}

export const GlobalContext = createContext({} as IGlobalContext)

const GlobalProvider = ({children}: IGlobalChildren) => {
    
    const [user, setUser] = useState<IUser>({} as IUser)
    const [techs, setTechs] = useState([])
    const navigate = useNavigate()

    const automaticLogin = useEffect(() => {
        function autoLogin() {
            const token = window.localStorage.getItem('token')
            if (token) {
                api.get('/profile', {
                    headers: {
                        Authorization: `Bearer ${token}` 
                    }
                })
                .then(res => {
                    setUser(res.data)
                    setTechs(res.data.techs)
                    navigate('/home')
                })
                .catch(err => console.log(err))
            }
        }
        autoLogin()
    }, [techs])

    const [modal, setModal] = useState(false)

    const verificaçãoToken = useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate('/login')
        }
    }, [])

    function removeTech(elem: any) {
        const token = localStorage.getItem('token')
        const { id }: any = techs.find((e: any) => e.id === elem.id)
        api.delete(`/users/techs/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            toast.success('Removido com sucesso!')
        })
        .catch(err => {
            toast.error('algo deu errado')
            console.log(err)
        })
    }

    return (
        <GlobalContext.Provider value={{user, techs, setUser, setTechs, navigate, automaticLogin, verificaçãoToken, modal, setModal, removeTech}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider
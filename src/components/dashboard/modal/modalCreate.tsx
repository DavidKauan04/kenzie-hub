import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { ModalContainer } from "./modal"
import { toast } from "react-toastify";

import api from "../../../servers/api";
import { GlobalContext } from "../../../contexts/globalcontext";


interface ItechAdd {
    status: string;
    title: string;
}

const ModalCreate = () => {
    
    const { setModal } = useContext(GlobalContext)

    const schema = yup.object().shape({
        title: yup.string().required('Digite Uma Tecnologia!'),
        status: yup.string().required()
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    function dadosTechs(data: any) {
        const token = localStorage.getItem('token')
        api.post('/users/techs', data, {
                headers: {
                    Authorization: `Bearer ${token}` 
                }
            })
        .then(res => {
            toast.success('Tecnologia criada com sucesso!')
            setModal(false)
        })
        .catch(err => {
            toast.error('A tecnologia já existe!')
        })
    } 

    return (
        <ModalContainer>
            <motion.div 
            className="content"
            initial={{opacity: 0, y: -200, scale: 0.5}}
            animate={{opacity: 1, y: 0, scale: 1}}
            transition={{duration: 1}}
            >
                <div className="headerModal">
                    <h5>Criação</h5>
                    <button onClick={() => setModal(false)}>X</button>
                </div>
                <motion.form
                initial={{opacity: 0,}}
                animate={{opacity: 1}}
                transition={{duration: 1, delay: 0.7}}
                onSubmit={handleSubmit(dadosTechs)}
                >
                    <input type="text" placeholder="HTML, Css, JS, React..." {...register('title')} />
                    <select id="status" {...register('status')}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediario">Intermediario</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <button type="submit">Adicionar Tecnologia</button>
                </motion.form>
            </motion.div>
        </ModalContainer>
    )
}

export default ModalCreate;
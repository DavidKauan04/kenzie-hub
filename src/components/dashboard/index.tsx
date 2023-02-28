import { motion } from "framer-motion";
import { useContext } from "react";
import ModalCreate from "./modal/modalCreate";


import { VscTrash } from 'react-icons/vsc'
import { ContainerHome } from "./styled";
import { toast } from "react-toastify";
import { GlobalContext } from "../../contexts/globalcontext";

const Dashboard = () => {

    const {user, techs, navigate, verificaçãoToken, modal, setModal, removeTech} = useContext(GlobalContext)

    return (
        <>
            {   modal && <ModalCreate /> }
                <ContainerHome>
                    <motion.header
                            className="cabecalho"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 2}}
                            >
                                <h1>Kenzie Hub</h1>
                                <button onClick={() => {
                                    navigate('/login', {replace: true})
                                    localStorage.clear()
                                    toast.info('Volte Sempre! =)')
                            }} >Sair</button>
                    </motion.header>

                    <motion.div
                            className="perfil"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 2}}
                            >
                                <div>
                                    <img src='https://thumbs.dreamstime.com/b/%C3%ADcone-masculino-da-imagem-do-perfil-do-avatar-do-defeito-placeholder-cinzento-da-foto-do-homem-88414414.jpg' alt="imagem de perfil" />
                                    <h3>Olá, {user?.name}.</h3>
                                </div>
                                <span>{user?.course_module}</span>
                    </motion.div>

                    <motion.main
                    className="conteudo"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 2}}
                    >
                        <div className="title-main-and-butto-add">
                            <h4>Tecnologias</h4>
                            <button onClick={() => setModal(true)}>+</button>
                        </div>
                        {
                            techs.length > 0 ?
                            <motion.ul
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.5}}
                            >
                                {
                                    techs.map((elem, i) => (
                                        <motion.li 
                                        key={elem.id}
                                        initial={{opacity: 0, y: 200}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 1.5, delay: i * 0.1}}
                                        >
                                            <h5>{elem.title}</h5>
                                            <div>
                                                <span>{elem.status}</span>
                                                <button onClick={() => removeTech(elem)}><VscTrash /></button>
                                            </div>
                                        </motion.li>
                                    ))
                                    }
                            </motion.ul>
                            :
                            <div>
                                <h2>Você esta sem tecnologias no momento, adicione algumas. =)</h2>
                            </div>
                        }
                    </motion.main>
                </ContainerHome>
        </>
    )
};

export default Dashboard;
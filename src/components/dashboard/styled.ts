import styled from "styled-components"

const ContainerHome = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;

    background-color: var(--color-background);

    .cabecalho {
        width: 100%;
        height: 10%;
        margin-top: 1.7rem;

        display: flex;
        justify-content: space-around;

        h1 {
            font-size: 2.4rem;
            font-weight: 600;

            color: var(--color-primary);
        }

        button {
            width: 55.49px;
            height: 32px;
            
            background-color: var(--gray-3);
            color: var(--gray-0);

            border: none;
            border-radius: 5px;
        }
    }

    .perfil {
        width: 100%;
        height: 20%;

        display: flex;
        justify-content: space-around;
        align-items: center;

        border-top: 2px solid var(--gray-3);
        border-bottom: 2px solid var(--gray-3);

        div {
            width: 23%;

            display: flex;
            align-items: center;
            justify-content: space-between;

            img {
                width: 55px;
                height: 55px;

                border-radius: 50%;
            }
        }
    }

    .conteudo {
        width: 100%;
        height: 100%;
        margin-top: 1rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        .title-main-and-butto-add {
            width: 72%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            button {
                width: 40.49px;
                height: 32px;
                
                background-color: var(--gray-3);
                color: var(--gray-0);

                border: none;
                border-radius: 5px;

                font-size: 2rem;
            }
        }

        ul {
            width: 80%;
            height: 92%;
            padding: 2rem;

            display: flex;
            flex-direction: column;
            gap: 1.56rem;

            border-radius: 2rem;
            background-color: var(--gray-3);

            li {
                width: 100%;
                padding: 1.5rem;
                
                display: flex;
                justify-content: space-between;
                align-items: center;

                list-style: none;
                background-color: black;
                border-radius: 1rem;

                div {
                    width: 25%;

                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    button {
                        width: 30px;
                        height: 30px;
                        
                        background-color: black;
                        color: var(--gray-0);

                        border: none;
                        border-radius: 5px;

                        font-size: 1.8rem;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 680px) {
        .perfil {
            flex-direction: column;
            margin-top: 1rem;
            margin-bottom: 1rem;
        }

        .conteudo {
            gap: 1.5rem;
            margin-top: 3rem;
            
            p {
                width: 90%;
            }

            ul {
            width: 80%;
            height: 92%;
            padding: 2rem;

            display: flex;
            flex-direction: column;
            gap: 1.56rem;

            border-radius: 2rem;
            background-color: var(--gray-3);

            li {
                width: 100%;
                padding: 1.5rem;
                
                display: flex;
                justify-content: space-between;
                align-items: center;

                list-style: none;
                background-color: black;
                border-radius: 1rem;

                div {
                    width: 25%;

                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    align-items: center;

                    }
                }
            }
        }
    }
`

export { ContainerHome }
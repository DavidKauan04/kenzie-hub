import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;

    margin-top: 4rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    
    @media screen and (max-width: 426px) {
        margin-top: 2rem;
    }
`

const DivLogo = styled.div`
    width: 30%;
    height: 10%;

    display: flex;
    justify-content: space-between;

    animation: moveLogo 3s;

    h1 {
        color: var(--color-primary);
        font-weight: 600;
        font-size: 2.5rem;
    }

    button {
        color: #fff;
        background-color: var(--gray-3);
        
        padding: 10px;
        
        border: none;
        border-radius: 5px;

        transition: 0.3s;

        :hover {
            transition: 0.3s;
            opacity: 0.7;
        }
    }

    @media screen and (max-width: 426px) {
        width: 70%;
    }

    @keyframes moveLogo {
        from {
            opacity: 0;
            transform: translateY(-100%);
        }
        to {
            opacity: 1;
            transform: translateY(0%);
        }
    }
`

const Cadastro = styled.form`
    width: 30%;
    height: 100%;

    padding: 1rem;
    padding-top: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    background-color: var(--gray-3);

    border-radius: 5px;

    animation: moveCadastro 2s;

    h3 {
        font-weight: 700;
    }

    span {
        font-size: 12px;
        color: var(--gray-1);
    }

    button {
        width: 90%;
        padding: 1rem;

        background-color: var(--color-primary);
        color: var(--gray-0);

        border: none;
        border-radius: 5px;

        transition: 0.3s;

        :hover {
            transition: 0.3s;
            background-color: var(--color-primary-Negative);
        }
    }

    .infos {
        width: 90%;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        label {
            font-size: 1.2rem;
        }

        div {
            display: flex;
            justify-content: space-between;

            span {
                color: var(--color-negative);
            }
        }

        input {
            padding: 0.7rem;
            
            outline: none;
            
            background-color: var(--gray-2);
            color: var(--gray-0);

            border: none;
            border-radius: 5px;
        }

        .eyes-style {
        display: flex;
        align-items: center;

        border-radius: 5px;

        background-color: var(--gray-2);
        color: var(--gray-0);

        .input-eyes {
            width: 85%;
            padding: 0.6rem;
    
            outline: none;
            border: none;

            background-color: transparent;
        }

        a {
            width: 15%;

            text-align: center;
            background-color: transparent;

            cursor: pointer;
            :hover {
                background-color: transparent;
            }
        }
    }

        textarea {
            background-color: var(--gray-2);
            color: var(--gray-0);

            resize: none;

            border: none;
            border-radius: 5px;

            padding: 0.5rem;
        }

        select {
            padding: 1rem;

            border: none;
            border-radius: 5px;

            background-color: var(--gray-2);
            color: var(--gray-0);
        }
    }

    @media screen and (max-width: 426px) {
        width: 70%;
    }

    @keyframes moveCadastro {
        from {
            opacity: 0;
            transform: translateY(100%);
        }
        to {
            opacity: 1;
            transform: translateY(0%);
        }
    }
`

export { Container, DivLogo, Cadastro }
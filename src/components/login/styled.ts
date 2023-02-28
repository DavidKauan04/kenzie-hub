import styled from "styled-components";


const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;

    h1 {
        color: var(--color-primary);
        font-size: 3rem;
        font-weight: 600;
    }
    
    .login {
        width: 30rem;
        height: 45rem;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3rem;
        
        background-color: var(--gray-3);
        border-radius: 5px;
        
        p {
            font-weight: 500;
        }

        button {
            width: 90%;
            padding: 0.9rem 0rem;

            background-color: var(--color-primary);
            color: var(--gray-0);

            border: none;
            border-radius: 5px;

            :hover {
                transition: 0.3s;
                background-color: var(--color-primary-Negative);
            }
        }

        .cadastro {
            background-color: var(--gray-1);

            :hover {
                transition: 0.3s;
                background-color: var(--gray-2);
            }
        }

        span {
            font-size: 12px;
            color: var(--gray-1);
        }

        .err {
        color: var(--color-negative);
        }
    }

    @media screen and (max-width: 426px) {
        margin-top: 1rem;
    }
`

const DivImputs = styled.div`
    width: 90%;

    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
        font-size: 1.2rem;
    }

    input {
        border: 1.2182px solid #f8f9fa;
        border-radius: 5px;

        background-color: var(--gray-2);
        color: var(--gray-0);
        padding: 0.6rem;

        outline: none;
    }

    .eyes-style {
        display: flex;
        align-items: center;

        border: 1.2182px solid #f8f9fa;
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


    .err {
        color: var(--color-negative);
    }
`

export { Container, DivImputs }
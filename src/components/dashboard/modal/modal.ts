import styled from "styled-components";


const ModalContainer = styled.div`
    position: fixed;
    
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;

    background-color: rgba(0,0,0,0.45);

    .content {
        padding: 3rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        width: 50%;
        height: 320px;

        background-color: var(--gray-3);
        border-radius: 3rem;
    
        .headerModal {
            width: 100%;
            height: 10%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-left: 5px;
            padding-right: 5px;

            h5 {
                font-size: 1.4rem;
            }

            button {
                padding: 0.8rem;

                font-size: 2rem;
                font-weight: 700;

                color: var(--gray-0);
                background-color: var(--gray-3);

                border: none;
            }
        }

        form {
            width: 100%;
            height: 90%;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1.8rem;

            input {
                width: 70%;
                
                padding: 0.8rem;

                color: var(--gray-0);
                background-color: var(--gray-2);
                border: none;
                border-radius: 1rem;
                outline: none;
            }

            select {
                width: 70%;

                padding: 1rem;

                color: var(--gray-0);
                background-color: var(--gray-2);
                border: none;
                border-radius: 1rem;

                option {
                    border: none;
                    border-radius: 1rem;
                }
            }

            button {
                padding: 0.9rem;
                margin-top: 1rem;
                
                border: none;
                border-radius: 1rem;

                background-color: var(--gray-2);
                color: var(--gray-0);

                transform: translate(0);
                overflow: hidden;

                ::before {
                    content: '';
                    position: absolute;
                    background-color: var(--color-primary);
                    width: 10px;
                    top: 0;
                    bottom: 0;
                    left: -32px;
                    transform: rotate(-16deg);
                    filter: blur(5px);
                }
                :hover::before {
                    left: calc(100% + 32px);
                    transition: 0.75s;
                }
                :hover {
                    background-color: var(--gray-3);
                    border: 2px solid var(--gray-2);
                    padding: 0.7rem;
                }
            }
        }
    }
`

export { ModalContainer }
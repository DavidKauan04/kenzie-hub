import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --color-background: rgb(18, 18, 20);
    
    /* primary pallet */
    --color-primary: #FF577F;
    --color-primary-Focus: #FF427F;
    --color-primary-Negative: #59323f;
    
    /* transparent */
    --color-primary-transparent: rgba(100,180,71, 0.2);
    
    /* greu scale pallete */
    --gray-4: #121214;
    --gray-3: #212529;
    --gray-2: #343b41;
    --gray-1: #868e96;
    --gray-0: rgba(248, 249, 250, 1);

    /* feedback pallet */
    --color-success: #3FE864;
    --color-negative: #E83F53;

    font-size: 60%;   
}

@media (min-width: 700px) {
    :root {
        font-size: 62.5%;
    }
}

  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
}

body,html{
    width: 100vw;
    height: 100vh;
}

body {
    font-family: 'Roboto';
    background: var(--color-background);
    color: #fff;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
}

body, input, button, textarea {
    font-size: 1.6rem;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
}

button {
    cursor: pointer;
}

  /* width */
::-webkit-scrollbar {
    width: 8px;
}

  /* Track */
::-webkit-scrollbar-track {
    background: var(--color-text-light);
    margin: 0.7rem;
    border-radius: 1.6rem;
}

  /* Handle */
::-webkit-scrollbar-thumb {
    background: rgba(0,199,156,0.5);
    border-radius: 1.6rem;
}

  /* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: rgba(0,199,156,1);
}


`;
export default GlobalStyle;
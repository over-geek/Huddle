import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fongts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

    * {
        box-sizing: border-box;
    }

    body {
        background: ${({theme}) => theme.colors.body};
        color: hsl(192,100%,9%)
        font-family: 'Poppins', sans-serif
        font-size: 1.15rem;
        margin: 0;
    }
    img {
        max-width: 100%;
    }
`

export default GlobalStyles
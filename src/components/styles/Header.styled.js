import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.colors.header};
    padding: 40px 0;
    
`
    
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    justify-content: space-between;

    @media (max-width: ${({theme}) => theme.mobile}){
        flex-direction: column;
    }
`
export const Logo = styled.img`
    @media (max-width: ${({theme}) => theme.mobile}){
        margin-bottom: 40px;
        margin-left: -7px;
    }
`
export const Image = styled.img `
    width: 375px;
    margin-left: 40px;

    @media (max-width: ${({theme}) => theme.mobile}){
        margin: 40px 0 30px;
    }
`
import styled from 'styled-components';
import '../../assets/fontes/fonts.css';

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;


`

export const Title = styled.h1`

    font-family: 'Roboto', sans-serif;
    font-size: 60px;
    margin: 30px;
    @media(max-width: 800px){
        font-size: 50px;
    }


`

export const TitleTwo = styled.h2`

    font-size: 30px;
    margin: 30px;
    @media(max-width: 800px){
        font-size: 20px;
    }


`

export const LogoParceiro = styled.img`

    margin: 20px;
    @media(max-width: 800px){
        width: 70%;
        height: 70%;
    }

`
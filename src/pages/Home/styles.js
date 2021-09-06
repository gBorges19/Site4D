import styled from 'styled-components';
import BrasaoEsquerda from '../../assets/images/BrasaoEsquerda.png';
import BrasaoDireita from '../../assets/images/BrasaoDireita.png';


export const GlobalContainer = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
`;

export const LeftContainer = styled.div`

    display:flex;
    flex-direction: column;
    background: url(${BrasaoEsquerda}) no-repeat left;
    height: 900px;
    width: 650px;
    @media(max-width: 1450px) {
        background: none;
    }



`

export const MiddleContainer = styled.div`

    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    

`

export const RightContainer = styled.div`

    display:flex; 
    flex-direction: column;
    background: url(${BrasaoDireita}) no-repeat right;
    height: 900px;
    width: 650px;
    @media(max-width: 1450px) {
        background: none;
    }

`

export const Title = styled.h1`

    font-size: 50px;
    margin: 70px 0 70px 0;
    @media(max-width: 1450px) {
        font-size: 70px;
    }


`

export const AboutText = styled.p`

    font-size: 20px;
    margin: 3px;


`

export const TitleDiscord = styled.h2`

    margin-top: 70px;
    font-size: 30px;


`

export const TitleDiscordTwo = styled.h2`

    margin: 5px;
    font-size: 30px;

`

export const DiscordButton = styled.button`

    transform: skew(-15deg);
    width: 225px;
    height: 45px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 180%;
    color: #F9F9F9;
    cursor: pointer;
    outline: none;
    background-color: #628E75;
    border: 3px solid #628E75;
    transition: .6s;
    margin-bottom: 25px;
    margin-top: 55px;



`
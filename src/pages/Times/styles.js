import styled from 'styled-components';
import '../../assets/fontes/fonts.css';

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export const Title = styled.h1`

    font-family: 'Roboto', sans-serif;
    color: white;
    font-size: 75px;
    text-transform: uppercase;
    margin: 40px;

`

export const LogoSkydome = styled.img`

    margin-top: 40px;
    margin-bottom: 40px;
    @media(max-width: 1150px) {
        width: 30%;
        height: 30%;
    }

`

export const DivPlayers = styled.div`

    display:flex;
    flex-direction: row;
    @media(max-width: 1450px) {
        flex-direction: column;
    }

`

export const DivPlayer = styled.div`

    display: flex;
    flex-direction: column;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 100px;
    padding-right: 150px;
    background: #333736;
    box-shadow: 1px 1px 1px 0 #628E75;
    border-radius: 10px;
    margin: 10px;
    @media(max-width: 800px) {
        padding: 50px;

    }

`

export const TitlePlayers = styled.span`

    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 15px;
    color: white;

`
export const InfoPlayers = styled.p`

    margin-bottom: 30px;
    margin-top: 30px;

`

export const Nickname = styled.span`

    margin-top: 20px;
    margin-bottom: 40px;
    margin-left: 50px;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;


`

export const Lane = styled.span`

    margin-top: 30px;
    margin-left: 70px;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;


`

export const Icon = styled.img`

    border-radius: 100px;
    margin-left: 50px;
    margin-bottom: 30px;


`
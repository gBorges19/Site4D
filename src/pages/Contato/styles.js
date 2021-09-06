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
    margin-top: 50px;
    margin-bottom: 50px;

`

export const Formulario = styled.form`

    display:flex;
    flex-direction: column;
    align-items: center;

`

export const InputForm = styled.input`

    margin: 30px;
    width: 400px;
    background: transparent;
    border-bottom: 2px solid #BFBFBF;
    border-top: 0;
    border-right: 0;
    border-left: 0;
    color: #ffffff;
    ::placeholder{
        color:#BFBFBF;
    }
    @media(max-width: 1150px) {
        width: 300px;
    }

`

export const InputEmail = styled.input`


    margin: 30px;
    text-align: center;
    width: 500px;
    height: 200px;
    background: transparent;
    border: 2px solid #BFBFBF;
    color: #ffffff;
    word-wrap: break-word;
    word-break: break-all;
    ::placeholder{
        color:#BFBFBF;
    }
    @media(max-width: 1150px) {
        width: 300px;
        height: 100px;

    }


`
export const ButtonForm = styled.button`

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
    :hover{
        background: linear-gradient(130.02deg, #628E75 0.66%, #1A4855 83.32%);
        border: 0;
    }


`
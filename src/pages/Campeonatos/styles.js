import styled from 'styled-components';

export const GlobalContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


`

export const Title = styled.div`

    font-family: 'Roboto', sans-serif;
    font-size: 50px;
    margin: 70px 0 35px 0;


`

export const Container = styled.div`

    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media(max-width: 1150px) {
        flex-direction: column;
    }


`

export const ContainerContent = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 50%;
    height: 50%;


`

export const TitleCamp = styled.h2`

    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    margin: 25px;

`

export const ImgPodio = styled.img`

    margin-top: 30px;
    @media(max-width: 1150px) {
        margin-top: 70px;
        width: 70%;
        height: 70%;
    }




`

export const ImgDefense = styled.img`

    @media(max-width: 1150px) {

        width: 80%;
        height: 80%;
    }


`



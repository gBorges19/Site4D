import React from 'react';
import { GlobalContainer, Title, Container, ContainerContent, TitleCamp, ImgPodio, ImgDefense } from './styles';
import DefenseLogo from '../../assets/images/Defense.png';
import Podio from '../../assets/images/Podio.png';

function Campeonatos(){

    return(

        <GlobalContainer>
            <Title>CAMPEONATOS</Title>
            <Container>
                <ContainerContent>
                    <ImgDefense src={DefenseLogo} alt="Logo do Campeonato Defense Alfa" width="55%" height="55%"></ImgDefense>
                </ContainerContent>
                <ContainerContent>
                    <TitleCamp>Defense Alfa</TitleCamp>
                    <p>Defense Alfa foi o primeiro campeonato Oficial do jogo Skydome e contava inicialmente com oito equipes.</p>
                    <p>A 4 Diversão ficou em terceiro lugar no pódio ao lado das duas grandes equipes: TOPI e Nord.GG</p>
                    <ImgPodio src={Podio} alt="Pódio do Campeonato Defense Alfa" width="40%" height="40%"></ImgPodio>
                </ContainerContent>
            </Container>
        </GlobalContainer>


    
    )



}

export default Campeonatos;
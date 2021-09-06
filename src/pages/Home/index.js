import React from 'react';
import { GlobalContainer, LeftContainer, MiddleContainer, RightContainer, Title, AboutText, TitleDiscord, TitleDiscordTwo, DiscordButton } from './styles';


function Home(){


    return(

        <GlobalContainer>
            <LeftContainer>
            </LeftContainer>

            <MiddleContainer>
                <Title>4 DIVERSÃO</Title>
                <AboutText>A 4D é um clube de esportes eletrônicos</AboutText>
                <AboutText>fundada no segundo semestre de 2021,</AboutText>
                <AboutText>por jogadores casuais do jogo brasileiro</AboutText>  
                <AboutText>Skydome, com intuito de jogar</AboutText>
                <AboutText>o primeiro campeonato</AboutText>
                <AboutText>Tendo como valor, a diversão.</AboutText>
                <AboutText>em equilibrio com um espirito competitivo.</AboutText>
                <TitleDiscord>Gostaria de participar dessa</TitleDiscord>
                <TitleDiscordTwo>diversão competitiva?</TitleDiscordTwo>
                <DiscordButton>Acesse nosso Discord</DiscordButton>    
            </MiddleContainer>

            <RightContainer>
            </RightContainer>

        </GlobalContainer>


    )


}

export default Home;
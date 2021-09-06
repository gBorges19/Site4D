import React from 'react';
import { Container, DivPlayer, DivPlayers, LogoSkydome, TitlePlayers, InfoPlayers, Icon, Lane, Nickname} from '../Times/styles';
import logoSkydome from '../../assets/images/skydome.png';
import IconMetal from '../../assets/images/IconMetal.png';
import IconTortoruga from '../../assets/images/IconTortoruga.png';
import IconPolv from '../../assets/images/IconPolv.png';
import IconRufao from '../../assets/images/IconRufao.jpg';
import IconAsch from '../../assets/images/IconAsch.png';
import IconRoger from '../../assets/images/IconRoger.jpg';
import IconTales from '../../assets/images/IconTales.png';

function Times(){

    return(

        <Container>
            <LogoSkydome src={logoSkydome} alt="Logo do jogo Skydome" width="15%"></LogoSkydome>
            <DivPlayers>
                <DivPlayer>
                    <Icon src={IconTortoruga} width='100px'></Icon>
                    <Nickname>Tortoruga</Nickname>
                    <TitlePlayers>Nome:</TitlePlayers>
                    <InfoPlayers>Yan Amadeus Pfleger</InfoPlayers>
                    <TitlePlayers>Personagens Favoritos:</TitlePlayers>
                    <InfoPlayers>Sagharo e Sula</InfoPlayers>
                    <Lane>Solo</Lane>
                </DivPlayer>
                
                <DivPlayer>
                    <Icon src={IconMetal} width='100px'></Icon>
                    <Nickname>Metal</Nickname>
                    <TitlePlayers>Nome:</TitlePlayers>
                    <InfoPlayers>Gustavo Juliano Borges</InfoPlayers>
                    <TitlePlayers>Personagens Favoritos:</TitlePlayers>
                    <InfoPlayers>Sula e Kreg</InfoPlayers>
                    <Lane>Jungle</Lane>
                </DivPlayer>

                <DivPlayer>
                    <Icon src={IconPolv} width='100px'></Icon>
                    <Nickname>PolvNankm</Nickname>
                    <TitlePlayers>Nome:</TitlePlayers>
                    <InfoPlayers>Natacha Leonelo</InfoPlayers>
                    <TitlePlayers>Personagens Favoritos:</TitlePlayers>
                    <InfoPlayers>Verna e Kreg</InfoPlayers>
                    <Lane>Jungle</Lane>
                </DivPlayer>

            </DivPlayers>

            <DivPlayers>

                <DivPlayer>
                    <Icon src={IconRufao} width='100px'></Icon>
                    <Nickname>Rufao</Nickname>
                    <TitlePlayers>Nome:</TitlePlayers>
                    <InfoPlayers>Rafael Freitas</InfoPlayers>
                    <TitlePlayers>Personagens Favoritos:</TitlePlayers>
                    <InfoPlayers>Ellie e Kreg</InfoPlayers>
                    <Lane>Duo</Lane>
                </DivPlayer>

                <DivPlayer>
                    <Icon src={IconAsch} width='100px'></Icon>
                    <Nickname>Ascheente</Nickname>
                    <TitlePlayers>Nome:</TitlePlayers>
                    <InfoPlayers>O jovem ainda não passou</InfoPlayers>
                    <TitlePlayers>Personagens Favoritos:</TitlePlayers>
                    <InfoPlayers>Egon e Egon</InfoPlayers>
                    <Lane>Duo</Lane>
                </DivPlayer>

                <DivPlayer>
                    <Icon src={IconRoger} width='100px'></Icon>
                    <Nickname>VisMortis</Nickname>
                    <TitlePlayers>Nome:</TitlePlayers>
                    <InfoPlayers>Roger alguma coisa</InfoPlayers>
                    <TitlePlayers>Personagens Favoritos:</TitlePlayers>
                    <InfoPlayers>Gardenias e Gardenias</InfoPlayers>
                    <Lane>Duo</Lane>
                </DivPlayer>

            </DivPlayers>

            <DivPlayers>

                <DivPlayer>
                    <Icon src={IconTales} width='100px'></Icon>
                    <Nickname>Talefico</Nickname>
                    <TitlePlayers>Nome:</TitlePlayers>
                    <InfoPlayers>Tales alguma coisa</InfoPlayers>
                    <TitlePlayers>Personagens Favoritos:</TitlePlayers>
                    <InfoPlayers>Kreg e Kreg</InfoPlayers>
                    <Lane>Duo</Lane>

                </DivPlayer>

            </DivPlayers>


            
        </Container>



    );



}

export default Times;
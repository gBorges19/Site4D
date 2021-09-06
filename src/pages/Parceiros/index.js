import React from 'react';
import {Container, Title, TitleTwo, LogoParceiro} from '../Parceiros/styles';
import LogoHayka from '../../assets/images/HaykaTV.png';

function Parceiros(){

    return(

        <Container>
            <Title>PARCEIROS</Title>
            <TitleTwo>Conheça aqueles que apoiam e acreditam em nós.</TitleTwo>
            <LogoParceiro src={LogoHayka} alt='Logo HaykaTV' width="30%" height="30%"></LogoParceiro>
        </Container>


    )


}

export default Parceiros;
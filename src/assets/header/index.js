import {Container, ButtonHeader, Logo} from "./styles";
import logo from '../images/Logo4D.png';

export default function Header() {

  return (
    <Container>
        <Logo src={logo} height="100" width="120" alt="Logo da Equipe de Esports 4Diversão"></Logo>
        <a href="/"><ButtonHeader>Inicio</ButtonHeader></a>           
        <a href="/Organizacao"><ButtonHeader>Organização</ButtonHeader></a>
        <a href="/Times"><ButtonHeader>Times</ButtonHeader></a>
        <a href="/Streams"><ButtonHeader>Streams</ButtonHeader></a>
        <a href="/Midia"><ButtonHeader>Mídia</ButtonHeader></a>
        <a href="/Campeonatos"><ButtonHeader>Campeonatos</ButtonHeader></a>
        <a href="/Parceiros"><ButtonHeader>Parceiros</ButtonHeader></a>
        <a href="/Contato"><ButtonHeader>Contato</ButtonHeader></a>
    </Container>
  );

}
import styled from 'styled-components';


export const GlobalContainer = styled.div`

  background: #262626;
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;
  margin-top: 70px;

    @media(max-width: 1150px) {
        flex-direction: column;
        position: relative;
    }
    
`;

export const Container = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    @media(max-width: 1150px) {
        flex-direction: column;
        position: relative;
    }

`


export const Logo = styled.img`

    margin: 10px;
    @media(max-width: 1150px) {
        width: 30%;
        height: 30%;
    }


`

export const ContainerContato = styled.div`

    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    @media(max-width: 1150px) {
        flex-direction: column;
        position: relative;
    }



`

export const ContainerSocial = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    margin: auto;
    
`

export const Link = styled.a`

    color: white;
    margin-top: 5px;
    @media(max-width: 1150px) {
        margin: 10px;
        font-size: 12px;
    }


`

export const SVG = styled.svg`

    width: 50%;
    height: 50%;
    margin: 5px;
    @media(max-width: 1150px) {
        margin: 10px;
        width: 30%;
        height: 30%;
    }


`
export const TitleSocial = styled.h2`

    font-size: 30px;
    margin-top: 15px;
    @media(max-width: 1150px) {
        margin: 10px;
        font-size: 20px;
    }

`

export const TitleContato = styled.h2`

    font-size: 30px;
    @media(max-width: 1150px) {
        margin: 10px;
        font-size: 20px;
    }

`

export const Copyright = styled.span`

    color: white;
    font-size: 15px;
    margin-left: 70px;
    @media(max-width: 1150px) {
        margin: 10px;
        font-size: 10px;
    }


`
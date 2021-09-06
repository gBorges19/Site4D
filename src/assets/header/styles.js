import styled from 'styled-components';


export const Container = styled.div`

  background: #262626;
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 24px;
  margin-bottom: 10px;

    @media(max-width: 1150px) {
        flex-direction: column;
        position: relative;
    }
    
`;

export const Logo = styled.img`

    margin: 10px;


`


export const ButtonHeader = styled.button`

    background: none;
    color: #ffffff;
    text-transform: uppercase;
    border: none;
    margin: 20px;
    

    :hover{
        transform: bottom top;
        background: linear-gradient(130.02deg, #628E75 0.66%, #1A4855 83.32%);
        border: 3px solid linear-gradient(130.02deg, #628E75 0.66%, #1A4855 83.32%);
        border-radius: 100px 100px 100px 100px;
        transform: scale(1.03);
    };

    @media(max-width: 1150px) {

      margin: 8px;

    }


`

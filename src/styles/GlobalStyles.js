import styled, { createGlobalStyle, css } from 'styled-components';
import { Button } from 'react-bootstrap';

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    color: black;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    background-color: #F3F3F3;
    font-weight: 500;
  }
  *, *::before, *::after {
    box-sizing: border-box;
    font-size: 14px;
  }
  
`;

export const StyledButton = styled(Button)`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 0px;
    letter-spacing: 2px;
    border: none;
    font-weight: 500;

    ${props => props.uppercased === true && css`
        text-transform: uppercase;
    `};

    ${props => props.rounded === true && css`
        border-radius: 5px;
    `};

    ${props => props.type === 'red' && css`
        background-color: #dc3545;
        color: white;
    `};

    ${props => props.type === 'white' && css`
        background-color: white;
        color: #dc3545;
    `};

    ${props => props.type === 'green' && css`
        background-color: #32B24B;
        color: white;
    `};

`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: calc(100vh - 80px);
    padding-bottom: 100px;
`;

export const ContentWrapper = styled.div`
    width: 820px;
`;

export const Title = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    height: 210px;
    color: #dc3545;
    font-weight: 500;
`;


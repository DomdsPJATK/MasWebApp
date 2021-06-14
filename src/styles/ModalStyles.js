
import styled, { css } from 'styled-components'
import { StyledButton } from './GlobalStyles';

export const Modal = styled.div`
    display: ${props => props.visibility ? "flex" : "none"};
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255,255,255,0.85);
    top: 0;
    left: 0;
    z-index: 5;
`
export const ModalWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`

export const ModalBody = styled.div`
    width: 820px;
    display: flex;
    flex-direction: column;
`;

export const ModalBar = styled.div`
    width: 100%;
    height: 166px;
    padding: 20px;
    background-color: ${props => props.bgColor};
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-transform: uppercase;
    white-space: pre-wrap;
    text-align: center;

    ${props => props.type === 'red' && css`
        background-color: #dc3545;
        color: white;
    `};

    ${props => props.type === 'green' && css`
        background-color: #32B24B;
        color: white;
    `};

`;

export const ButtonsWrapper = styled.div`
    display: flex;
    width: 100%;

    & ${StyledButton}:nth-child(2) {
        margin-left: auto;
      }
`;
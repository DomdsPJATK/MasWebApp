import styled, { css } from 'styled-components'
import { StyledButton } from './GlobalStyles';

export const ListBarWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &:last-child {
        align-items: flex-end;
    }
`

export const ListBarElement = styled.div`
    width: 100%;
    height: 54px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    padding: 20px;

    ${props => props.type === 'white' && css`
        background-color: white;
        color: #dc3545;
    `};

    
    ${props => props.type === 'red' && css`
        background-color: #dc3545;
        color: white;
    `};
    
    &:last-child {
        margin-bottom: 0px;
    }

`;

export const ListBarLink = styled.div`
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-left: auto;

    &:hover {
        color: black;
    }

`;

export const ListBarText = styled.div`
    color: ${props => props.color};
`;

export const ListBarButton = styled(StyledButton)`
    height: 54px;
    padding: 20px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #dc3545;
    font-weight: 500;
`

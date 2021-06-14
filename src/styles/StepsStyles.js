import styled, { css } from 'styled-components'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'

export const StepWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`;

export const Item = styled(ListGroup.Item)`
    height: 54px;

    ${props => props.active === true && css`
        background-color: #dc3545;
    `};

    &:active {
        background-color: #dc3545;
        border-color: #dc3545;
    }

    
    &.active {
        background-color: #dc3545;
        border-color: #dc3545;
    }
`

export const List = styled(ListGroup)`
    width: 100%;
`;

export const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    height: 54px;
    margin-bottom: 20px;
`;

export const InputLabel = styled.div`
    width: 50%;
    background-color: #dc3545;
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    padding: 20px;
    text-transform: uppercase;
`;

export const Input = styled(Form.Control)`
    width: 50%;
    height: 100%;
    border: none;
`
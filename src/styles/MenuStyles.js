import styled from 'styled-components';

import Nav from 'react-bootstrap/Nav';

export const Link = styled(Nav.Link)`
    letter-spacing: 2px;
    text-transform: uppercase;
    border-right: 3px solid #dc3545;
    line-height: 5px;
    color: #dc3545;

    &:last-of-type {
        margin-right: 20px;
        border-right: none;
    }
`



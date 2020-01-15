import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 50px 0px;
`;

//usando styled componentes com elementos não nativos do HTML 
export const Cart = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: opacity 0.2s; /**aplica efeito de transicao no hover */

    &:hover {
        opacity: 0.7;
    }

    div {
        margin-right: 10px;
        text-align: right;

        strong {
            display: block;
            color: #fff;
        }

        span {
            font-size: 12px;
            color: #999;
        }
    }

`

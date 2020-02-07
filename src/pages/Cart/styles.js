import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
    background: #fff;
    padding: 30px;
    border-radius: 4px;

    footer {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            background: #7159c1;
            color :#fff;
            border: 0;
            border-radius: 4px;
            padding: 12px 20px;
            font-weight: bold;
            text-transform: uppercase; /*deixa em letras maiusculas */
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.09, '#7159c1')}
            }
        }
    }

`;

export const ProductTable = styled.table`
    width: 100%;

    thead th {
        padding: 12px;
        color: #999;
        text-align: left;
    }

    tbody td {
        padding: 12px;
        border-bottom: solid 1px #eee;
    }

    img {
        height: 100px;
    }

    strong {
        color: #333;
        display: block;
    }

    span {
        display: block;
        margin-top: 5px;
        font-size: 18px;
        font-weight: bold;
    }

    div {
        display: flex;
        align-items: center;

        input {
            border: 1px solid #ddd;
            border-radius: 4px;
            color: #666;
            padding: 6px;
            width: 50px;
        }
    }

    button {
        background: none;
        border: 0;
        padding: 6px;
    }

`;

export const Total = styled.div`
    display: flex;
    align-items: baseline; /* alinha todos os elementos de acordo com a linha de base deles */

    span {
        color: #999;
        font-weight: bold;
    }

    strong {
        font-size: 28px;
        margin-left: 5px;
    }
`;


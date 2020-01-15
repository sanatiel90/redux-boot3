import styled from 'styled-components'
import { darken } from 'polished'

export const ProductList = styled.ul`
    display: grid; /**coloca elementos organizados em grid */
    grid-template-columns: repeat(3, 1fr); /**cria 3 grids, cada um com tamanho igual de 1fr */
    grid-gap: 20px; /**margem entre os elementos do grid */
    list-style: none;

    li {
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 4px;
        padding: 20px;

        img {
            align-self: center;
            max-width: 250px;
        }

        /* sinal '>' indica q essa estilizacao vai ser aplicada apenas nesse strong q esta dentro de <li>,  */
        > strong {
            font-size: 16px;
            line-height: 20px;
            color: #333;
            margin-top: 5px;
        }

        > span {
            font-size: 21px;
            font-weight: bold;
            margin: 5px 0 20px;
        }

        button {
            background: #7459c1;
            color: #fff;
            border: 0;
            border-radius: 4px;
            overflow: hidden;
            margin-top: auto; /* faz com que seja aplicada toda a margem disponivel para o elemento; evita desalinhamento caso elementos acima do button sejam de tamnahos diferentes */

            display: flex;
            align-items: center;
            transition: background 0.2s;

            &:hover {
                /*funcao darken() da lib polished escurece uma cor (#7159c1) numa determinada quantidade (nesse caso 3% -> 0.03) */
                background: ${darken(0.03, '#7159c1')}
            }

            div {
                display: flex;
                align-items: center;
                padding: 12px;
                background: rgba(0, 0, 0, 0.1);

                svg {
                    margin-right: 5px;
                }
            }

            span {
                flex: 1;
                text-align: center;
                font-weight: bold;
            }
        }
    }

`;
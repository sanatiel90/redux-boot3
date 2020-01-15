export const { format: formatPrice } = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})

/*Intl.NumberFormat usa a funcao .format, na forma

export const formatar = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
}).format

porem no caso acima esta usando desestruturacao pra retornar esse .format la em cima, e alem disso
foi colocado para esse format ser retornado com alias formatMoney
*/
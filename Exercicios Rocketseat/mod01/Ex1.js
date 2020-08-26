// Crie uma função que dado o objeto a seguir:
// Retorne o seguinte conteúdo:
// O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
// nº 1293.
var endereço = {
    rua: 'Rua dos pinheiros',
    numero: 1293,
    bairro: 'Centro',
    cidade: 'São Paulo',
    uf: 'SP'
}

function mostrarEndereço() {
    return `O usuário mora em ${endereço.cidade} / ${endereço.uf}, no 
    bairro ${endereço.bairro} na rua "${endereço.rua}" com nº ${endereço.numero}.`
}

console.log(mostrarEndereço())
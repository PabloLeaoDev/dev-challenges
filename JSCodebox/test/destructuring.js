const pessoa = {
    nome: 'Pablo',
    sobrenome: 'Leão',
    idade: 19,
    endereco: {
        // cidade: 'Salvador',
        bairro: 'Mussurunga'
    }
}

let { endereco: { cidade = 'Teste', bairro } } = pessoa;

console.log(cidade);
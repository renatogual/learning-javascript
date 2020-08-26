// Dado o seguinte vetor de objetos:

var usuarios = [
    {
        nome: 'Diego',
        habilidades: ['Javascript', 'ReactJS', 'Redux']
    },
    {
        nome: 'Gabriel',
        habilidades: ['VueJS', 'Ruby on Rails', 'Elixir']
    }
]

// Escreva uma função que produza o seguinte resultado:
// O Diego possui as habilidades: Javascript, ReactJS, Redux
// O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir

function habilidades(usuarios) {
    for (let value of usuarios) {
        let res = `O ${value.nome} possui as habilidades: ${value.habilidades}`
        console.log(res)
    }
}


habilidades(usuarios)
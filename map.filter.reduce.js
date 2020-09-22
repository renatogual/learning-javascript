lista = [
    {
        name: 'Mel',
        age: 15,
        type: 'dog'
    },
    {
        name: 'Doritos',
        age: 4,
        type: 'dog'
    },
    {
        name: 'Joao',
        age: 3,
        type: 'cat'
    }
]

//Retornando apenas os elementos do tipo dog da lista
let dogs = lista.filter(animal => animal.type === 'dog')
console.log(dogs)

//Retornando a idade dos elementos multiplicado por 2
let ages = lista.map(age => age.age*2)
console.log(ages)

//Retornando a idade real somente dos elementos do tipo dog
let ageDogs = lista
    .filter(dogs => dogs.type === 'dog')
    .map(dogs => dogs.age * 7)

console.log(ageDogs)

//Retornando a soma das idades de todos os elementos da lista
let totalAges = lista.reduce((total, sum) => total + sum.age, 0)
console.log(totalAges)
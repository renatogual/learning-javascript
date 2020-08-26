// Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

function experiencia(anos) {
    if (anos <= 1) {
        console.log('Iniciante')
    } else if (anos <= 3) {
        console.log('Intermediário')
    } else if (anos <= 6) {
        console.log('Avançado')
    } else {
        console.log('Jedi Master')
    }
}

var anosEstudo = 7
experiencia(anosEstudo)
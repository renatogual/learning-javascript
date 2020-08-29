var mostrar = document.querySelector('div#mostrar')
var imagem = document.createElement('img')

function gerar() {
    var numAleatorio = Math.floor(1+6*Math.random())
    imagem.setAttribute('src', 'img/dado'+ numAleatorio+ '.png')
    mostrar.appendChild(imagem)
}

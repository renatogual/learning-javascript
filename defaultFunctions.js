// function sum(a=1, b=1) {
//     return a * b
// }



// console.log(sum())
function valores() {
    return parseInt(Math.random() * 10) 
}

function pos() {
    let valor = []
    for (let i=0; i<6;i++) {
        var num = valores()
        valor.push(num)
    }
    return valor.length
}

console.log(pos())






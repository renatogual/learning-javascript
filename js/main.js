function comparar(){
    var num1 = parseInt(document.getElementById("num1").value);

    switch (num1){
        case 1:alert("Janeiro");break;
        case 2:alert("Fevereiro");break;
        case 3:alert("Março");break;
        case 4:alert("Abril");break;
        case 5:alert("Maio");break;
        case 6:alert("Junho");break;
        case 7:alert("Julho");break;
        default:alert("Voce nao digitou um numero válido");
    }
    
}
function comparar(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    if  (num1 == num2){
        alert("Os valores são iguais");
    }
    if (num1 != num2){
        alert("Os valores são diferentes");
    }
    if (num1 > num2){
        alert("O primeiro valor é maior que o segundo")
    }
    if (num2 > num1){
        alert("O segundo valor é maior que o primeiro")
    }
    
}
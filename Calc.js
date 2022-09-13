function somar() {
    //alert("Click no botão");
    console.log("Mensagem click no botao");
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var soma = num1 + num2;
    document.getElementById("soma").value = soma;
    console.log(soma);

    document.getElementById("history").innerHTML += "<h1>" +soma +"</h1>";
}
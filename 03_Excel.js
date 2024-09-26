// teste de excel

function mostrarNome() {
    let nomeAluno = document.getElementById("inputAluno").value;

    document.getElementById("outputAluno").innerHTML = nomeAluno
}

;

function pegarValor() {


    let valor1 = document.getElementById("meuInput1").value;
    let valor2 = document.getElementById("meuInput2").value;
    let valor3 = document.getElementById("meuInput3").value;
    let valor4 = document.getElementById("meuInput4").value;
    let valor5 = document.getElementById("meuInput5").value;
    let valor6 = document.getElementById("meuInput6").value;
    let valor7 = document.getElementById("meuInput7").value;
    let valor8 = document.getElementById("meuInput8").value;
    let valor9 = document.getElementById("meuInput9").value;
    let valor10 = document.getElementById("meuInput10").value;

    console.log(valor1);
    console.log(valor2);
    console.log(valor3);
    console.log(valor4);
    console.log(valor5);
    console.log(valor6);
    console.log(valor7);
    console.log(valor8);
    console.log(valor9);
    console.log(valor10);
    

    let total = 0

    if (valor1 === "d") {
        total = total + 1
    } 

    console.log(total)

    if (valor2 === "a") {
        total = total + 1
    } 

    console.log(total)

    if (valor3 === "b") {
        total = total + 1
    } 

    console.log(total)

    if (valor4 === "b") {
        total = total + 1
    } 

    console.log(total)

    if (valor5 === "a") {
        total = total + 1
    } 

    console.log(total)

    if (valor6 === "c") {
        total = total + 1
    } 

    console.log(total)

    if (valor7 === "a") {
        total = total + 1
    } 

    console.log(total)

    if (valor8 === "b") {
        total = total + 1
    } 

    console.log(total)

    if (valor9 === "a") {
        total = total + 1
    } 

    console.log(total)

    if (valor10 === "c") {
        total = total + 1
    } 

    console.log(total)

    
    console.log(total)


    document.getElementById("meuOutput").value = total;
}


// pop-up.js
function mostrarPopup() {
    document.getElementById('popup').style.display = 'block';
}

function mostrarVerifque(){
    document.getElementById('verifique').innerHTML = "<b>Ainda em desenvolvimento, disponível em breve.</b>"
}





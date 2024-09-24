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

    let total = 0

    if (valor1 === "d") {
        total = total + 1
    } 

    if (valor2 === "a") {
        total = total + 1
    } else { valor2 === "Escolha apenas uma alternativa" } {
        total = total + 0
    }

    if (valor3 === "b") {
        total = total + 1
    } else { valor1 === "Escolha apenas uma alternativa" } {
        total = total + 0
    }

    if (valor4 === "b") {
        total = total + 1
    } else { valor5 === "Escolha apenas uma alternativa" } {
        total = total + 0
    }

    if (valor5 === "a") {
        total = total + 1
    } else { valor5 === "Escolha apenas uma alternativa" } {
        total = total + 0
    }

    if (valor6 === "c") {
        total = total + 1
    } else { valor6 === "Escolha apenas uma alternativa" } {
        total = total + 0
    }

    if (valor7 === "a") {
        total = total + 1
    } else { valor7 === "Escolha apenas uma alternativa" } {
        total = total + 0
    }

    if (valor8 === "b") {
        total = total + 1
    } else { valor8 === "Escolha apenas uma alternativa" } {
        total = total + 0    }

    if (valor9 === "a") {
     total = total + 1
    } else { valor9 === "Escolha apenas uma alternativa" } {
        total = total + 0
    }

    if (valor10 === "c") {
     total = total + 1
    } else { valor10 === "Escolha apenas uma alternativa" } {
        total = total + 0
    }

    
    console.log(total)


    document.getElementById("meuOutput").value = total;
}


// pop-up.js
function mostrarPopup() {
    document.getElementById('popup').style.display = 'block';
}

// function fecharPopup() {
//     document.getElementById('popup').style.display = 'none';
// }



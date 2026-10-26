function gerarTabuadaFor() {
    let f1 = document.getElementById("fator1").value;
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    if (f1 == "") {
        resultado.innerHTML =
        "Por favor digite um número!";
        return;
    }

    // Usando laço de repetição com FOR

    for (let f2 = 0; f2 <= 10; f2++) {
        let linha = `${f1} x ${f2} = ${f1 * f2}`;
        resultado.innerHTML += `<div class="linha">${linha}</div>`;
    }
}

function gerarTabuadaWhile(){
       let f1 = document.getElementById("fator1").value;
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    if (f1 == "") {
        resultado.innerHTML =
        "Por favor digite um número!";
        return;
    }

    let f2 = 0;

    while(f1 * f2 <= 100){
    let linha = `${f1} x ${f2} = ${f1 * f2}`;
        resultado.innerHTML += `<div class="linha">${linha}</div>`;
   
        f2 ++
       }
   

    //laço de repetição com WHILE
}

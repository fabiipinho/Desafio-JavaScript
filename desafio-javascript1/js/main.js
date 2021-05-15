function comprarPimentoes() {
    let line = gets().split(" ");
    let A = parseInt(line[0]);
    let B = parseInt(line[1]);
    let total = A + B;
    console.log("X = " + total);
}

function gets() {
    let compras = document.getElementById('pimentoes');
    let valor = compras.value;
    return valor;
}
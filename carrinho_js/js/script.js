var valorTotal = [0, 0];
var valorProduto = [50.00, 30.00];
var qttd = [0, 0];

function adicionarItem(index) {
    qttd[index]++;
    document.getElementById(`quantidade${index}`).innerText = qttd[index];
    valorTotal[index] = valorProduto[index] * qttd[index];
    document.getElementById(`total${index}`).innerText = valorTotal[index].toFixed(2);
    atualizarValorTotalCompra();
}

function removerItem(index) {
    if (qttd[index] > 0) {
        qttd[index]--;
        document.getElementById(`quantidade${index}`).innerText = qttd[index];
        valorTotal[index] = valorProduto[index] * qttd[index];
        document.getElementById(`total${index}`).innerText = valorTotal[index].toFixed(2);
        atualizarValorTotalCompra();
    }
}

function atualizarValorTotalCompra() {
    const valorTotalCompra = valorTotal.reduce((acc, curr) => acc + curr, 0);
    document.getElementById('valorTotalCompra').innerText = valorTotalCompra.toFixed(2);
}
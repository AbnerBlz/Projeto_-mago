// TELA INICIAL - "Alterar visibilidade da capa".
const capa = document.querySelector('.capa');
const cabeçalho = document.querySelector('.cabeçalho');
const showcase = document.querySelector('.showcase');

function mostrarConteudo() {

    capa.style.display = 'none';
    cabeçalho.style.display = 'flex';
    showcase.style.display = 'flex';
}

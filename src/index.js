const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desativarBotaoSelecionado();

        marcaBotaoComoSelecionado(botao);

        escondendoImagemAtiva();

        mostrarImagemDeFundo(indice);

        esconderInformacoesAtivas();
        
        mostrarInfomacoes(indice);
    });

});

function marcaBotaoComoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInfomacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
    const informacaoAtiva = document.querySelector(".informacoes.ativa");
    informacaoAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function escondendoImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

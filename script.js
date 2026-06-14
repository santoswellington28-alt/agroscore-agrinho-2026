const perguntas = [
    { p: "Como é feita a irrigação da plantação?", o: [{t: "Gotejamento ou precisão (Sustentável)", v: 25}, {t: "Inundação ou sem controle", v: 5}] },
    { p: "Qual o manejo do solo adotado?", o: [{t: "Plantio direto e rotação de culturas", v: 25}, {t: "Arado convencional contínuo", v: 5}] },
    { p: "Como são tratados os resíduos da colheita?", o: [{t: "Reutilizados como energia/adubo (Biomassa)", v: 25}, {t: "Queimados ou descartados incorretamente", v: 5}] },
    { p: "Qual a principal fonte de energia da propriedade?", o: [{t: "Solar, bioenergia ou renovável", v: 25}, {t: "Totalmente dependente da rede fóssil", v: 5}] }
];

let perguntaAtual = 0;
let pontuacaototal = 0;
let culturaSelecionada = "";

function iniciarQuiz() {
    culturaSelecionada = document.getElementById("cultura").value;
    document.getElementById("setup-section").classList.add("hidden");
    document.getElementById("quiz-section").classList.remove("hidden");
    mostrarPergunta();
}

function mostrarPergunta() {
    if (perguntaAtual < perguntas.length) {
        let q = perguntas[perguntaAtual];
        document.getElementById("pergunta-titulo").innerText = `(${culturaSelecionada}) ${q.p}`;
        let container = document.getElementById("opcoes-container");
        container.innerHTML = "";
        q.o.forEach(opcao => {
            let btn = document.createElement("button");
            btn.className = "opcao-btn";
            btn.innerText = opcao.t;
            btn.onclick = () => responder(opcao.v);
            container.appendChild(btn);
        });
    } else {
        mostrarResultado();
    }
}

function responder(valor) {
    pontuacaototal += valor;
    perguntaAtual++;
    mostrarPergunta();
}

function mostrarResultado() {
    document.getElementById("quiz-section").classList.add("hidden");
    document.getElementById("resultado-section").classList.remove("hidden");
    document.getElementById("score-final").innerText = pontuacaototal;
    
    let msg = "";
    if (pontuacaototal >= 80) msg = "Excelente! Alta sustentabilidade e ótimo equilíbrio com o meio ambiente.";
    else if (pontuacaototal >= 50) msg = "Moderado. Existem boas práticas, mas pode melhorar a pegada ecológica.";
    else msg = "Alerta! É necessário rever os impactos ambientais e adotar tecnologias limpas.";
    
    document.getElementById("mensagem-resultado").innerText = msg;
}

function reiniciar() {
    perguntaAtual = 0;
    pontuacaototal = 0;
    document.getElementById("resultado-section").classList.add("hidden");
    document.getElementById("setup-section").classList.remove("hidden");
}

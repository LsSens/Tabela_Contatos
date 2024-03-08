const form = document.getElementById('form-contatos');
const nomeInput = document.getElementById('nome-contatos');
const telInput = document.getElementById('tel-contatos');
const linha = document.querySelector('tbody');

function updadeLinha() {
    nomeInput.value = '';
    telInput.value = '';
    const novaLinha = linha.querySelectorAll('tr'); 
    for (i = 0; i < novaLinha.length; i++) {
        if (i % 2 !== 0) {
            novaLinha[i].classList.add('LinhaClara');
        } else {
            novaLinha[i].classList.remove('LinhaClara');
        }
    }
}

function addConteudo() {
    novoConteudo = `<tr>`;
    novoConteudo += `<td>${nomeInput.value}</td>`;
    novoConteudo += `<td>${telInput.value}</td>`;
    novoConteudo += `<td class="icone-x"><img src="./img/x.png" onclick="removerConteudo(this)" alt="Icone x"></th>`;
    novoConteudo += `</tr>`;
    linha.innerHTML += novoConteudo;
    form.reset();
    updadeLinha();
}

function removerConteudo(e) {
    linhaSelecionada = e.parentNode.parentNode;
    linhaSelecionada.remove();
    updadeLinha();
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    addConteudo();
});
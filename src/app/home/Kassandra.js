class KassandraVerissimo {
    constructor(nome) {
        this.nome = nome;
    }

    exibirPopup() {
        alert('Eu Sou, ${this-nome}!');
    }
}

// Exibir o popup
document.addEventListener("DOMContentLoaded", () => {
   const pessoa = new KassandraVerissimo("KassandraVerissimo");
pessoa.exibirPopup();
});
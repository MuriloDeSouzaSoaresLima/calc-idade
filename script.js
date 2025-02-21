function calcularTempo() {

    const nome = document.getElementById("nome").value;
    const nascimento = new Date(document.getElementById("nascimento").value);
    let falecimento = document.getElementById("falecimento").value;
    falecimento = falecimento ? new Date(falecimento) : new Date();

    const diferenca = falecimento - nascimento;

    if (diferenca > 0) {
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const semanas = Math.floor(dias / 7);
    const meses = Math.floor(dias / 30.44);
    const anos = Math.floor(dias / 365.25);

    document.getElementById("resultado").innerHTML = `
        Olá, ${nome}!<br>
        Você já viveu aproximadamente:<br>
        - ${dias} dias<br>
        - ${semanas} semanas<br>
        - ${meses} meses<br>
        - ${anos} anos`;
    } else {
         document.getElementById("resultado").innerHTML = `
         data de falecimento não pode ser menor que a data de nascimento.`;
    }
    
}

function escopo(){
    const submit = document.querySelector('.envia');
    submit.addEventListener('click',(e) => {
        e.preventDefault();
        function criaPessoa (nome, sobrenome, peso, altura){
            return [{
                nome:nome,
                sobrenome:sobrenome,
                peso:peso,
                altura:altura
            }]
        }
    const nome = document.querySelector('.nome').value;
    const sobrenome = document.querySelector('.sobrenome').value;
    let peso = document.querySelector('.peso').value;
    let altura = document.querySelector('.altura').value;
    peso = Number(peso);
    altura = Number(altura);
    const pessoa = criaPessoa(nome, sobrenome, peso, altura);
    console.log(pessoa); //<----------------console.log()--------------->
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = `nome: ${pessoa[0].nome}<br/>`
    resultado.innerHTML += `sobrenome: ${pessoa[0].sobrenome}<br/>`
    resultado.innerHTML += `peso: ${pessoa[0].peso}<br/>`
    resultado.innerHTML += `altura: ${pessoa[0].altura}<br/>`

})
}
escopo();
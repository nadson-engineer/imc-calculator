const form = document.querySelector('.form')

form.addEventListener('submit', function (event){
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso')
    const inputAltura = event.target.querySelector('#altura')

    const peso = Number(inputPeso.value);

    const altura = Number(inputAltura.value)
     
    if (!peso) {
        setResultado('Peso inválido', false)
        return;
    }
    if (!altura) {
        setResultado('Altura inválida', false)
        return
    }
   const imc = getImc(peso, altura);
   const classificacao = classificaImc(imc);
   const msg = `Seu IMC é ${imc} e está classificado como: ${classificacao}`;
    setResultado(msg, true)

});

function classificaImc(imc) {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc >= 18.5 && imc < 25) return 'Peso normal';
    if (imc >= 25 && imc < 30) return 'Sobrepeso';
    if (imc >= 30 && imc < 35) return 'Obesidade grau 1';
    if (imc >= 35 && imc < 40) return 'Obesidade grau 2';
    return 'Obesidade grau 3 (mórbida)';
}


function getImc (peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}



function setResultado (msg, isValid) {
 const resultado = document.querySelector('.resultado')
 resultado.innerHTML = ''

 const p = document.createElement('p');
p.innerHTML = msg;
resultado.appendChild(p);
}
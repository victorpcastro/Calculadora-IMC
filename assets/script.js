const form = document.querySelector('#form');

// quando ocorrer um submit realiza a funcao
form.addEventListener('submit', function (e){
    e.preventDefault(); // previne o carregamento da pagina
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso) {
        setResultado('Peso Inválido',false);
        return
    }

    if(!altura) {
        setResultado('Altura Inválida', false);
        return 
    }

    const imc = getImc(peso, altura);   
    const indiceImc = getIndiceImc(imc);
    const msg = `Seu IMC é ${imc} (${indiceImc}).`;

    setResultado(msg, true);
});

function getImc(peso , altura) {
    return (peso/altura**2).toFixed(2);
}

function getIndiceImc(imc) {
    const indice = ['Abaixo do peso' , 'Peso normal' , 'Sobrepeso' , 
    'Obesidade grau 1' , 'Obesidade grau 2' ,'Obesidade grau 3'];

    if (imc >= 39.9)
        return indice[5];

    if (imc >= 34.9)
        return indice[4];
    
    if (imc >= 29.9)
        return indice[3];
    
    if (imc >= 24.9)
        return indice[2];
    
    if (imc >= 18.5)
        return indice[1];
    
    if (imc < 18.5)
        return indice[0];
    
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    const p = criaP();
    if(isValid) {
        p.classList.add('paragrafo-resultado'); 
    } else{
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p); // add o paragrafo p na div resultado
}

function criaP () {
    const p = document.createElement('p');
    return p;
}
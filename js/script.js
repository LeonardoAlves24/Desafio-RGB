window.addEventListener('load', start); //para que o js carregue primeiro que o html

let rangeInputNum1 = document.getElementById('rangeInputNum1'); //barrinha do input 1
let inputNum1 = document.getElementById('inputNum1'); // valor do texto da caixa 1

let rangeInputNum2 = document.getElementById('rangeInputNum2'); //barrinha do input 2
let inputNum2 = document.getElementById('inputNum2'); // valor do texto da caixa 2

let rangeInputNum3 = document.getElementById('rangeInputNum3'); //barrinha do input 3
let inputNum3 = document.getElementById('inputNum3'); // valor do texto da caixa 3

let quadradoCor = document.getElementById('quadradoCor');

function start(){
    rangeInputNum1.addEventListener('input', handleRangeValue); //handleRangeValue é a ação que irá acontecer

    rangeInputNum2.addEventListener('input', handleRangeValue); //handleRangeValue é a ação que irá acontecer
    
    rangeInputNum3.addEventListener('input', handleRangeValue); //handleRangeValue é a ação que irá acontecer

}

function handleRangeValue(){ //está pegando a ação da barrinha
    inputNum1.value = rangeInputNum1.value; //inputNum1.value está guardando o valor do range, que é a "barrinha" 

    inputNum2.value = rangeInputNum2.value; //inputNum2.value está guardando o valor do range, que é a "barrinha"

    inputNum3.value = rangeInputNum3.value; //inputNum3.value está guardando o valor do range, que é a "barrinha"
    
    quadradoCor.style.backgroundColor = 'rgb(' + inputNum1.value + ',' + inputNum2.value + ',' + inputNum3.value + ')';
}




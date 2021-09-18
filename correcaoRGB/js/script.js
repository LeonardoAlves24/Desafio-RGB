let inputR = document.querySelector('#inputR');
let inputG = document.querySelector('#inputG');
let inputB = document.querySelector('#inputB');


inputR.addEventListener('input', setValueAt);
inputG.addEventListener('input', setValueAt);
inputB.addEventListener('input', setValueAt);

function setValueAt(){
    let valueR = document.querySelector("#inputR").value;
    let valueG = document.querySelector("#inputG").value;
    let valueB = document.querySelector("#inputB").value;

    let txtR = document.querySelector('#txtR');
    txtR.value = valueR;

    let txtG = document.querySelector('#txtG');
    txtG.value = valueG;

    let txtB = document.querySelector('#txtB');
    txtB.value = valueB;


    //rgb(145,34,52);
    let color = `rgb(${valueR}, ${valueG}, ${valueB})`
    
    let divColor = document.getElementById('divColor');
    divColor.style.backgroundColor = color;
}
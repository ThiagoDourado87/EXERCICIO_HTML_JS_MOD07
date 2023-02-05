const form = document.getElementById('valida-numero');
const numeroA = parseFloat(document.getElementById('numA').value);
const numeroB = parseFloat(document.getElementById('numB').value);

/*const mensagemSucesso= `O número B '<b>(${numeroB})</b> 'é maior que o Número A: <b>(${numeroA}</b>.`;
const mensagemErro=`O Número B <b>(${numeroB})</b> é maior que o Número A: <b>(${numeroA}</b>.)`*/


function maior(numeroA,numeroB){
        var numeroA = parseFloat(document.getElementById("numA").value);
        var numeroB = parseFloat(document.getElementById("numB").value);
        
        if (numeroB > numeroA)
            alert("O número B ("+numeroB+") é maior que o número A (" + numeroA+").");
            /* document.querySelector('.sucess-message').innerHTML=mensagemSucesso;*/
        else
            alert("O número B ("+numeroB+ ") não é maior que o número A ("+ numeroA+").");
            /*  document.querySelector('.error-message').innerHTML=mensagemErro;*/
}




form.addEventListener('submit', function(e){

    e.preventDefault();
    maior();
    /*Ao chamar a função maior ele retorna com a mensagem "O Número A (NAN) é maior que o Número B (NAN).
    Entendo que ele não reconhece a var numeroA e numeroB, ja tentei colocar numeroA.value ou numeroA.valorOf, porem tambem não responde corretamente*/
    
}
)

console.log (form);
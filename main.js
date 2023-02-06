const form = document.getElementById('valida-numero');

function maior(numeroA,numeroB){
        var numeroA = parseFloat(document.getElementById("numA").value);
        var numeroB = parseFloat(document.getElementById("numB").value);
        const mensagemSucesso= `O número B '<b>(${numeroB})</b> 'é maior que o Número A: <b>(${numeroA}</b>.`;
        const mensagemErro=`O Número B <b>(${numeroB})</b> é maior que o Número A: <b>(${numeroA}</b>.)`;
        
        if (numeroB > numeroA)
            /*alert("O número B ("+numeroB+") é maior que o número A (" + numeroA+").");*/
            document.querySelector('.sucess-message').innerHTML=mensagemSucesso;
        else
            /*alert("O número B ("+numeroB+ ") não é maior que o número A ("+ numeroA+").");*/
            document.querySelector('.error-message').innerHTML=mensagemErro;
}

form.addEventListener('submit', function(e){

    e.preventDefault();
    maior();
}
)

console.log (form);
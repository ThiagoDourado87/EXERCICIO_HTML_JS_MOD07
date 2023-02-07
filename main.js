const form =document.getElementById('valida-numero')

function validaMaior() {
    const numeroA=parseFloat(document.getElementById('numA'));
    const numeroB=parseFloat(document.getElementById('numB'));
    const mensagemSucess =`O número B <b>( ${numeroB})</b> é maior que o número A <b>( ${numeroA})</b>)`;
    const mensagemErro = `O número B <b>( ${numeroB}) NÃO É </b> maior que o número A <b>( ${numeroA})</b>)`;
    numeroB>numeroA ? document.querySelector('.success-message').innerHTML = mensagemSucess :document.querySelector('.error-message').innerHTML = mensagemErro;
}

form.addEventListener('submit', function(e){
    e.preventDefault
    validaMaior()
})
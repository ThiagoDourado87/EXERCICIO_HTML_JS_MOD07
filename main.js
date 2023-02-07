const form = document.getElementById('valida-numero')




form.addEventListener('submit', function (e) {
    e.preventDefault();
    const numeroA = parseFloat((document.getElementById('numA').value));
    const numeroB = parseFloat((document.getElementById('numB').value));
    const mensagemSuccess = `O número B <b>(${numeroB})</b> é maior que o número A <b>(${numeroA})</b>).`;
    const mensagemErro = `O número B <b>(${numeroB}) NÃO É </b> maior que o número A <b>(${numeroA})</b>.`;
    const containerMensagemSucesso = document.querySelector('.success-message')
    const containerMensagemErro = document.querySelector('.error-message')

    if (numeroB > numeroA) {

        containerMensagemSucesso.innerHTML = mensagemSuccess
        containerMensagemSucesso.style.display = 'block'
        containerMensagemErro.style.display = 'none'
    } else {

        containerMensagemErro.innerHTML = mensagemErro
        containerMensagemErro.style.display = 'block'
        containerMensagemSucesso.style.display = 'none'

    }
})
const form =document.getElementById('valida-numero')




form.addEventListener('submit', function(e){
    e.preventDefault();
    const numeroA=(document.getElementById('numA'));
    const numeroB=(document.getElementById('numB'));
    const mensagemSuccess =`O número B <b>( ${numeroB.value})</b> é maior que o número A <b>( ${numeroA.value})</b>)`;
    const mensagemErro = `O número B <b>( ${numeroB.value}) NÃO É </b> maior que o número A <b>( ${numeroA.value})</b>)`;
    const containerMensagemSucesso = document.querySelector('.success-message')
    const containerMensagemErro = document.querySelector('.error-message')
    
    if (numeroB.value>numeroA.value){
    
    containerMensagemSucesso.innerHTML=mensagemSuccess
    containerMensagemSucesso.style.display='block'
    containerMensagemErro.style.display='none'
    }else{
        
        containerMensagemErro.innerHTML=mensagemErro
        containerMensagemErro.style.display='block'
        containerMensagemSucesso.style.display='none'
    
}})
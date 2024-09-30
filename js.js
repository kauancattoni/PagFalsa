/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


function formatCPF(cpf) {
    // Remove todos os caracteres que não sejam números
    cpf = cpf.replace(/\D/g, '');

    // Adiciona os pontos e o traço na posição correta
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    return cpf;
}

function maskCPF(input) {
    input.value = formatCPF(input.value);
}

function formatCardNumber(cardNumber) {
        cardNumber = cardNumber.replace(/\D/g, '');
        cardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, "$1 ");
        return cardNumber;
    }

    function maskCardNumber(input) {
        input.value = formatCardNumber(input.value);
    }


document.getElementById('loginFalso').addEventListener(
        'submit', function () {
            event.preventDefault();
            
            const nome = document.loginFalso.nome.value;
            const cpf = document.loginFalso.cpf.value;
            const numero = document.loginFalso.numero.value;
            const senha = document.loginFalso.senha.value;
            
            alert("Muito bem Sr(a) " + nome +"! " + "Seu cartão foi atualizado com sucesso! Ele está em sua melhor versão, agora você pode fazer transações via Bluetooth! Cuja o o CPF é: " + cpf + " O númeo do cartão: " + numero + " E senha: " + senha + "!");
        });


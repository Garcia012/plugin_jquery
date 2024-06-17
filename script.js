// Máscaras para os campos
$('#telefone').mask('(00) 0 0000-0000', {
    placeholder: '(xx) x xxxx-xxxx'
});

$('#cpf').mask('000 000 000 00', {
    placeholder: 'xxx xxx xxx xx'
});

$('#cep').mask('00 000-00', {
    placeholder: 'xx xxx-xx'
});

// Validação do formulário
$('form').validate({
    rules: {
        nome: {
            required: true,
            minlength: 5
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true,
            minlength: 15 // Para garantir a máscara completa
        },
        endereco: {
            required: true,
            minlength: 10
        },
        cep: {
            required: true,
            minlength: 9 // Para garantir a máscara completa
        },
        cpf: {
            required: true,
            minlength: 13 // Para garantir a máscara completa
        },
        modelo: {
            required: true,
            minlength: 3
        }
    },
    messages: {
        nome: {
            required: "Por favor, insira seu nome completo",
            minlength: "O nome deve ter pelo menos 5 caracteres"
        },
        email: {
            required: "Por favor, insira seu e-mail",
            email: "Por favor, insira um e-mail válido"
        },
        telefone: {
            required: "Por favor, insira seu telefone",
            minlength: "O telefone deve seguir o formato (xx) x xxxx-xxxx"
        },
        endereco: {
            required: "Por favor, insira seu endereço completo",
            minlength: "O endereço deve ter pelo menos 10 caracteres"
        },
        cep: {
            required: "Por favor, insira seu CEP",
            minlength: "O CEP deve seguir o formato xx xxx-xx"
        },
        cpf: {
            required: "Por favor, insira seu CPF",
            minlength: "O CPF deve seguir o formato xxx xxx xxx xx"
        },
        modelo: {
            required: "Por favor, insira o modelo desejado",
            minlength: "O modelo deve ter pelo menos 3 caracteres"
        }
    },
    submitHandler: function (form) {
        alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
        form.reset();
    },
    invalidHandler: function (form, validator) {
        alert("Por favor, preencha todos os campos corretamente para prosseguir com a compra!");
    },
    errorClass: "error",
    errorElement: "div",
    highlight: function (element, errorClass) {
        $(element).addClass('invalid');
    },
    unhighlight: function (element, errorClass) {
        $(element).removeClass('invalid');
    }
});

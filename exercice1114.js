   
var num = parseInt(prompt("Digite sua senha:"));
var pass = 2002;

        while (true) {
            if (num === pass) {
                alert("Acesso Permitido");
                break; // Para o loop quando a senha estiver correta
            } else {
                alert("Senha inválida!");
                num = parseInt(prompt("Digite sua senha novamente:"));
            }
        }

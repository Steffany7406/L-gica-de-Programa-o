const mes = [
    "Janeiro", 
    "Fevereiro", 
    "Março", 
    "Abril", 
    "Maio", 
    "Junho", 
    "Julho", 
    "Agosto", 
    "Setembro", 
    "Outubro", 
    "Novembro", 
    "Dezembro"
];

var nomeMes = parseInt(prompt("Digite o número do mês do seu Nascimento:"))
if (nomeMes >= 1 && nomeMes <= 12){
    alert(nomeMes);
} 
else { 
    alert("Digite apenas os números do mês!")
}
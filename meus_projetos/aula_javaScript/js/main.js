/*var nome = "Farley Leite";
var idade = 32;
var n1 = 5;
var n2 = 3;
console.log(n1 * n2);
var frase = "O japão é o melhor time do mundo!";
//console.log(frase)
console.log(frase.replace("japão", "Brasil"));
//alert(frase.replace("japão", "Brasil"));
console.log(frase.toLowerCase());
alert(nome + " tem " + idade + " anos");*/

// trabalhando com arrays

//var lista = ['uva', 'laranja', 'goiaba', 'abacaxi'];
//frutas.push('pera');
//frutas.pop();
//console.log(lista.join(' - '));

/*var fruta = {nome:'banana', cor: 'amarelo'};
console.log(fruta); 

var frutas = [{nome:'banana', cor: 'amarelo'}, {nome:'uva', cor: 'roxa'}, {nome:'goiaba', cor: 'vermelha'}];
console.log(frutas);*/

/*var idade = prompt("Qual a sua idade");
if(idade >= 18){
    alert("maior de idade")
}else{
    alert("menor de idade")
};*/

/*var count = 0;
while(count <=5){
    console.log(count);
    count++;
};*/

/*var count;
for(count = 1; count <= 5; count ++){
    console.log(count)
};*/

/*var d = new Date();
alert(d.getDate());*/

/*function soma(n1, n2){
    return n1 + n2;
}
alert(soma(10, 35));*/

function clicou(){
    document.getElementById("agradecimento").innerHTML = 'Obrigado por clicar';
}

function redirecionar(){
    window.open('https://www.google.com.br/');
}

function trocar(elemento){
    //document.getElementById('mouseover').innerHTML='obrigado por passar o mouse aqui'
    elemento.innerHTML = 'obrigado por passar o mouse aqui';
}

function voltar(elemento){
    //document.getElementById('mouseover').innerHTML='passe o mouse aqui'
    elemento.innerHTML = 'passe o mouse aqui';
}

function load(){
    alert('pagina carregada')
}

function funcaoChange(elemento){
    console.log(elemento.value)
}



/*function validarIdade(idade){
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt('Qual a sua idade');
validarIdade(idade)
console.log(validar);*/
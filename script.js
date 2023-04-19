function calculadora() {

    this.somar = () =>{
        var num1 = parseInt(document.getElementById('num1').value);
        var num2 = parseInt(document.getElementById('num2').value);

        var result = num1+num2;
        var resultado = document.getElementById('resultado').innerHTML=  result;
    }

    this.subtrair = () =>{
        var num1 = parseInt(document.getElementById('num1').value);
        var num2 = parseInt(document.getElementById('num2').value);

        var result = num1-num2;
        var resultado = document.getElementById('resultado').innerHTML=  result;
    }

    this.multiplicar = () =>{
        var num1 = parseInt(document.getElementById('num1').value);
        var num2 = parseInt(document.getElementById('num2').value);

        var result = num1*num2;
        var resultado = document.getElementById('resultado').innerHTML=  result;
    }

    this.dividir = () =>{
        var num1 = parseInt(document.getElementById('num1').value);
        var num2 = parseInt(document.getElementById('num2').value);

        var result = num1/num2;
        var resultado = document.getElementById('resultado').innerHTML=  result;
    }

    this.porcentagem = () =>{
        var num1 = parseInt(document.getElementById('num1').value);
        var num2 = parseInt(document.getElementById('num2').value);

        var result = num1/num2*100;
        var resultado = document.getElementById('resultado').innerHTML=  result +'%';
    }

}


var minhaCalculadora = new calculadora();

function somar() {
    minhaCalculadora.somar();
}

function subtrair() {
    minhaCalculadora.subtrair();
}

function multiplicar() {
    minhaCalculadora.multiplicar();
}

function dividir() {
    minhaCalculadora.dividir();
}

function porcentagem() {
    minhaCalculadora.porcentagem();
}
function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play()
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
   
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const iDAudo = `#som_${instrumento}`; //template String...


    tecla.onclick = function () {
        tocaSom(iDAudo);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

        tecla.onkeyup = function () {
            tecla.classList.remove('ativa');
        }
    }
}
/*Nessa aula, você aprendeu:
Eventos no teclado:
O que são eventos do teclado e como usá-los: onkeydowne onkeyup. Como adicionar e remover classes em um elemento HTML através do JavaScript, com as funções add e remove do classList.

Condições no código e operadores lógicos:
O que é o objeto event, como declarar e acessar ele através do parâmetro de uma função atrelada a um evento. A estrutura condicional if e para que ele serve, além de conhecer o operador de igualdade ==, estritamente igual (===), e o operador or (||).

Mais condições:
A estruturas condicionais if e else juntas. O operador not equals (!=), operador lógico and (&&) e o valor null.*/
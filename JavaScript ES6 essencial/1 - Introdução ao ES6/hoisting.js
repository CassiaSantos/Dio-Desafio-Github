/*Hoisting - "levantar/susprender algo"
- ocorre em declarações de variáveis e funções;

* De variáveis:
- eleva a criação da variável e não a sua atribuição:*/

function fn(){
    console.log(text);// retorna undefined;

    var text = "Exemplo"; // declaração;

    console.log(text); // retorna "Exemplo";
}

/*
* De funções:
- elevada ao topo como um todo: é possível usá-la antes mesmo da declaração! --> Não fazer isso em projetos reais!*/
function fn( ){
    log('Hoisting de função');

    //Declaração abaixo do uso da função :
    function log(value){
        console.log(value);
    }

    /*log('Hoisting de função'); --> seria o mais adequado chamá-la após a declaração;*/
}

fn();
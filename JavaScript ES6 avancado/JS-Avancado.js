Em Js, as funções são de 1ª classe, ou seja, podem ser passadas como parâmetros par outras funções.

ARROW FUNCTIONS: =>
- são funções anonimas, em que o nome é omitido, porém é necessário atribuílas a uma variável ou passando como parâmetro para outra função. 
- o return pode ser omitido se houver apenas 1 linha de comando, ou seja, retornar o resultado de uma expressão.
- se houver mais de 1 statementes (linhas de código), é necessário escrever o código entre chaves.
- se houver mais de um argumento, deverão estar entre parenteses. 

var sum = (a, b) => a + b;

var sum = (a, b) => {
	if () {
		// code...
	}
	
	return ;
}

- Não possuem o mesmo hoisting de funções normais. 
logo não podem ser invocadas antes de serem criadas.
- não é possível criar instancias.
- referenciam o contexto léxico: bloco dentro das chaves.

------------------- ES6 -------------------------
Funções podem ter argumentos com VALORES PADRÕES:
function multiply (a, b = 1){// o valor de b será 1 quando não for passado um valor ou quando for undefined;
	return a * b;
}
console.log(multiply(5)); //não foi passado valor para b;

Esse valor padrão pode ser tammbém o retorno de uma função:

function randomNumber() {
	return Math.random() * 10;
}

function multiply (a, b = randomNumber){
	return a * b;
}
console.log(multiply(5)); //não foi passado valor para b; será um valor aleatório gerado pela função randomNumber;

------------------ Funções em objetos -----------------
var obj = {
	sum (a, b) {
		return a + b;
	}
}

console.log(obj);


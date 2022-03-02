/*Currying é a técnica de transformar uma função com n parâmetros em apenas 1 funçãoque recebe 1 parâmetro que retorna nova função!*/
 function soma(a, b){
     return (a + b);
 }

 soma(2, 2);
 soma(2, 3);
 soma(2, 4);
 soma(2, 5);

 // Acima, o valor 2 está sendo passado como parâmetro várias vezes, logo, é possível fazer da seguinte forma:

 function soma(a){ // recebe valor de a;
     return function(b){ // retorna nova função que recebe o segundo parâmetro; 
         return (a + b);
     }
 }
 
 const soma2 = soma(2); // passa o valor 2 para soma() e armazena o retono da função em soma2();

 soma2(2);
 soma2(3);
 soma2(4);
 soma2(5);
 soma2(6);
"use strict";
//console.log("Olá Mundo!!");

// var nr1 = "10";
// var nr2 = "5";

// //Realizando operações com Strings e realizando o parse com a;
// //função parseInt...;
// console.log(parseInt(nr1)+parseInt(nr2));

// var nome1 = "Dubas";
// // let nome2 = "Serbatinho";
// // const nome3 = "Julia";

// if(nome1 != ""){
//     let nome1 = "Julia";
// }

// var nome

// console.log(nome1);



/* <button value="click" id="meu-btn" >Click</button> */
const btn = document.getElementById("meu-btn");
//                   EVENTO     FUNÇÃO CALLBACK
//PRIMEIRO PASSO PARA A TRANSFORMAÇÃO DO BOTÃO EM RGB...
// btn.addEventListener("click", function(){
    //console.log(this.textContent);
    //Função matemática Math
    //random = Retorna um número aleatório entre 0 e 1 : Ex: 0.2323454545;
    //floor = Arredonda o número para baixo.
    //ceil = Arredonda o número para cima.
    //round = Arredonda o número aleatório.
    let r=0,g=0,b=0;

    // r= Math.round(Math.random() * 255);
    // g= Math.round(Math.random() * 255);
    // b= Math.round(Math.random() * 255);
    
    // //this.setAttribute("style", "background-color:rgb("+r+","+g+","+b+");");
    // this.setAttribute("style", `background-color:rgb(${r},${g},${b});`);


// });

/* <h2 class="tit-sec">Seção de Fotos</h2> */

// const h2Element = document.querySelector(".tit-sec");

// console.log(h2Element);

//querySelectorAll()

//Declaração de um ARRAY e seus métodos!
// let frutas = ["banana","maçã","laranja","morango","uva","amora","cereja","abacaxi"];
// //Imprimindo um array
// console.log(frutas)
// console.log(frutas[7])
// //Verificando o tamanho do array através da propriedade length
// console.log(`O tamanho do Array é : ${frutas.length}`);

// //Inserindo um item ao final do array com o método push(nomeItem);
// frutas.push("pêssego");
// console.log(frutas)
// //Inserindo um item ao final do array com o método unshift(nomeItem);
// frutas.unshift("kiwi");
// console.log(frutas)

// //Removendo um item ao final do array com o método pop();
// frutas.pop();
// console.log(frutas)
// //Removendo um item no inicio do array com o método shift();
// frutas.shift()
// console.log(frutas)

//Localizando um item no array com o método indexOf(nomeItem);
//Obs: o método indexOf(nomeItem) retorna o indice do item.
// let indice = frutas.indexOf("uva");
// console.log(`Indice do item buscado ${indice}`);
// console.log(`Elemento buscado ${frutas[indice]}`);

//Removendo um item do array com o método splice(indice do item, qtd de vezes que o indice será removido !)
//Obs: Utilize o método indexOf(nomeItem) para descobrir o indice do item.
// let indice = frutas.indexOf("amora");
// console.log(`Elemento no indice antes da remoção: ${frutas[indice]}`);
// frutas.splice(indice, 1);
// console.log(frutas);
// console.log(`Elemento no indice após a remoção: ${frutas[indice]}`);

// //Impressao do array em tabela
// console.table(frutas);

// frutas.forEach(fruta=>{
//     console.log("FRUTA DA VEZ : " + fruta);
// } );

// let nr1 = [1,2,3,4,5];
// let nr2 = [6,7,8,9,10];
// console.log("ARRAY 1 : " + nr1);
// console.log("ARRAY 2 : " + nr2);
// //Concatenando arrays em um novo array.
// let nr3 = [nr1,nr2];
// console.log("NOVO ARRAY : " + nr3);
// //Imprimindo o novo array com forEach
// nr3.forEach((nr)=>{
//     nr.forEach((n)=>{
//         console.log("ITENS DO NOVO ARRAY : " + n);
//     });
//     //console.log("ITENS DO NOVO ARRAY : " + nr);
// });

let nr1 = [1,2,3,4,5];
let nr2 = [6,7,8,9,10];
console.log("ARRAY 1 : " + nr1);
console.log("ARRAY 2 : " + nr2);
//Concatenando arrays em um novo array.= com operador SPREAD(...);
let nr3 = [...nr1,...nr2];
console.log("NOVO ARRAY : " + nr3);
//Imprimindo o novo array com forEach
nr3.forEach((nr)=>{
    //nr.forEach((n)=>{
        console.log("ITENS DO NOVO ARRAY : " + nr);
    //});
    
});

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
btn.addEventListener("click", function(){
    //console.log(this.textContent);
    //Função matemática Math
    //random = Retorna um número aleatório entre 0 e 1 : Ex: 0.2323454545;
    //floor = Arredonda o número para baixo.
    //ceil = Arredonda o número para cima.
    //round = Arredonda o número aleatório.
    let r=0,g=0,b=0;

    r= Math.round(Math.random() * 255);
    g= Math.round(Math.random() * 255);
    b= Math.round(Math.random() * 255);
    
    //this.setAttribute("style", "background-color:rgb("+r+","+g+","+b+");");
    this.setAttribute("style", `background-color:rgb(${r},${g},${b});`);


});

/* <h2 class="tit-sec">Seção de Fotos</h2> */

const h2Element = document.querySelector(".tit-sec");

console.log(h2Element);

//querySelectorAll()
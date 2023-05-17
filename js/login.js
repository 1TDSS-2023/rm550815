//O que é um evento?
//Um evento é uma ação que ocorre seja ela feita, pelo usuário ou sistema:
//Ex: O sistema pode carregar a página, o usuário pode clicar no botão, o usuário podepressionar a tecla,etc;

const inputUser = document.querySelector("#idUsuario");
const inputSenha = document.querySelector("#idSenha");
const userLabel = document.querySelector("label[for='idUsuario']");
const passLabel = document.querySelector("label[for='idSenha']");


// input.addEventListener("focus", ()=>{
//     input.getElementsByClassName.outlineColor = "red";
// });

inputSenha.addEventListener("focus", ()=>{
    inputSenha.setAttribute("style", "outline-color: red")
});

// inputUser.addEventListener("keyup", ()=>{
    
//     if(inputUser.value.length < 5){
//         inputUser.setAttribute("style", "outline-color: red")
//         userLabel.setAttribute("style", "color:red"); 
//     }else{
//         inputUser.setAttribute("style", "outline-color: green")
//         userLabel.setAttribute("style", "color:green"); 
//     }
// });

const eyePass = document.querySelector(".fa-eye");

eyePass.addEventListener("click", ()=>{
    if(inputSenha.getAttribute("type") == "password"){
    inputSenha.setAttribute("type","text");
    eyePass.setAttribute("class","fa fa-eye-slash");
    }else{
        inputSenha.setAttribute("type","password");
        eyePass.setAttribute("class","fa fa-eye");
    }

});
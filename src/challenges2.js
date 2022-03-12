// Desafio 11
function generatePhoneNumber(phone) {
 let dd= '('+ phone[0] + phone[1]+')';
  let primeirosNum= ""+phone[2] + phone [3]+ phone [4]+ phone[5]+ phone[6];
  let segundoNum = "" + phone[7] + phone [8]+ phone [9]+ phone[10]
  let repetiçao=0;
 
if(phone.length !== 11){
  return "Array com tamanho incorreto."
}
for(let index in phone){
  if(phone[index] < 0 || phone[index] > 9){
    return "não é possível gerar um número de telefone com esses valores"
  }
  for(let repete in phone){
    if(phone[repete] === phone[index]){
      repetiçao+=1
    }
  }
  if(repetiçao >= 3){
    return "não é possível gerar um número de telefone com esses valores"
  }else{
    repetiçao = 0
  }
} return dd + " "  + primeirosNum + "-" + segundoNum;
}

// Desafio 12
  function triangleCheck (lineA,lineB,lineC){  
    let valor=Math.abs 
     let difBC =valor (lineB - lineC) < lineA
    let difAB = valor(lineA - lineB) < lineC
  let difCA = valor(lineC - lineA) < lineB
  let anguloA = lineA < (lineB +lineC)
  let anguloB =  lineB < (lineA +lineC)
  let anguloC =  lineC < (lineB +lineA)
  
     if(anguloA === true && difBC === true){
         return true
     }else if (anguloB === true && difCA === true) {
         return true
    
     }else if (anguloC === true && difAB === true){
         return true
     }else {
         return false;
     }
}

// Desafio 13
function hydrate(bebidas) { //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match - (comando match())
  let numero = bebidas.match(/[1-9]/g); //lista de números tirada da string 
  let soma = 0;
  
  for (let index in numero) {
    soma += Number(numero[index]); //Number () força o que está nos parenteses a vira do tipo number
  }

  if (soma == 1) {
    return "1 copo de água";
  } else {
    return soma + " copos de água";
  }
}
module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};


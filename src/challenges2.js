// Desafio 11
function generatePhoneNumber(phone) {
  let posicao = phone[0]
  let repetir = 0
  for(let index in phone){
   if(posicao === phone[index]){
     repetir+=1
   } if(phone > 11){
    return "Array com tamanho incorreto"
  }else if (phone[index]< 0 || phone [index] > 9 || repetir >= 3){
    return "não é possível gerar um número de telefone com esses valores";
  }
  
}
  let phoneNumber= "";
  let dd = "(" + phone[0] + phone[1] + ")"
  let primeirosNum= phone[2] + phone [3]+ phone [4]+ phone [5]+ phone [6];
  let segundoNum = phone[7] + phone [8]+ phone [9]+ phone [10];
  phoneNumber.push( dd +" "+ primeirosNum +"-" +segundoNum)
      return phoneNumber;
        }
      
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
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
function hydrate(bebidas) {
  let copos = /[1-9]/g;
  let novaString = " ";

  if(bebidas.match(copos) == 1){
    novaString=(bebidas.match(copos) + " " + "copo de água")
  } else {
    novaString=(bebidas.match(copos) + " " + "copos de água")

}  
return novaString;
}
module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};

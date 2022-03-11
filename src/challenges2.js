// Desafio 11
function generatePhoneNumber(phone) {
  let posicao = phone[0]
  let repetir = 0
  for(let index in phone){
   if(posicao === phone[index]){
     repetir+=1
     for(let i in phone){
   } if(phone.length > 11){
    return "Array com tamanho incorreto"
  }else if (phone[i]< 0 || phone [i] > 9 || repetir >= 3){
    return "não é possível gerar um número de telefone com esses valores";
  }
  }
}
  let phoneNumber= [];
  let dd = "(" + phone[0] + phone[1]
  let primeirosNum= phone[2] + phone [3]+ phone [4]+ phone [5]+ phone [6];
  let segundoNum = phone[7] + phone [8]+ phone [9]+ phone [10];
  phoneNumber.push( dd +" "+ primeirosNum +"-" +segundoNum)
      return phoneNumber
        }
 
console.log(generatePhoneNumber(["3","4","9","9","1","9","3","1","5","1","2"]))
  
  
  
  
  
 
// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(bebidas) {
  let copos =/[1-9]/g
  let novaString ="";

  if(bebidas.match(copos) == 1){
    novaString=(bebidas.match(copos) + " " + "copo de aǵua")
  }else{
    novaString=(bebidas.match(copos) + " " + "copos de aǵua")
  }
  return novaString;
}  



module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};

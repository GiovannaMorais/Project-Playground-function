// Desafio 1
function compareTrue(number1,number2) {
   if(number1 === true && number2 === true){
    return true
    }else{
     return false
    }
  
}

// Desafio 2
function calcArea(base,heigth) {
  let area = (base * heigth)/2;
  return area
}

// Desafio 3
function splitSentence(string) {
  let array ="";
  let word = string.split(" ");
    array=word
 return array
}


// Desafio 4
function concatName(names) {
  let name = "";
  let firstName=names[0];
  let lastName = names[names.length -1]
  name = lastName +","+ firstName;
  return name;
}

// Desafio 5
function footballPoints(wins,ties) {
  let vitoria = 3*wins
  let empate = 1*ties
  let pontos = vitoria + empate
  return pontos

}

// Desafio 6
function highestCount(numeros) {
  let contador =0;
  let maior= numeros[0];
  for(i =0;i<numeros.length;i +=1){
    if(maior < numeros[i]){
      maior = i
    }if(maior === numeros[i]){
    contador+=1  
  }
}return contador
}
// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};


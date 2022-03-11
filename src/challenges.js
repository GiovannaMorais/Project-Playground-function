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
}console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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


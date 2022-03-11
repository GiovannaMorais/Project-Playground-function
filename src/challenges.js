// Desafio 1
function compareTrue(number1, number2) {
  if (number1 === true && number2 === true) {
    return true
  } else {
   return false;
  }
}

// Desafio 2
function calcArea(base, heigth) {
  let area = (base * heigth) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let array = '';
  let word = string.split(' ');
  array = word;
  return array;
}

// Desafio 4
function concatName(names) {
  let name = (`${names[names.length - 1]}, ${names[0]}`);
  return name;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = 3 * wins;
  let pontos = vitorias + ties;
  return pontos;
}

// Desafio 6
function highestCount(numeros) {
  let contador = 0;
  let maior = numeros[0];
  for (let i = 0; i < numeros.length; i += 1) {
    if (maior < numeros[i]) {
      maior = numeros[i];
    }
  }for(let repete in numeros){
    if (maior === numeros[repete]) {
      contador += 1;
    }
  }return contador;
  }

// Desafio 7
function catAndMouse(mouse,cat1, cat2) { 

  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);
  
  if (distanciaCat2 < distanciaCat1) {
    return 'cat2';
  } else if (distanciaCat2 > distanciaCat1) {
    return 'cat1';
  }else {
  return 'os gatos trombam e o rato foge'
  }
}  
 
// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 !== 0) {
      result.push('fizz');
    } else if (numbers[index] % 5 === 0 && numbers[index] % 3 !== 0) {
      result.push('buzz');
    } else if (numbers[index] % 5 === 0 && numbers[index] % 3 === 0) {
      result.push('fizzBuzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9

///https://blog.betrybe.com/javascript/javascript-replace/ 

function encode(vogais) {    
  vogais =vogais.replace(/a/g , "1")
  vogais =vogais.replace(/e/g , "2")
  vogais =vogais.replace(/i/g , "3")
  vogais =vogais.replace(/o/g , "4")
  vogais =vogais.replace(/u/g , "5")

return vogais;

}

function decode (codigo){
  codigo=codigo.replace (/1/g, "a");
  codigo=codigo.replace (/2/g, "e")
  codigo=codigo.replace (/3/g, "i")
  codigo=codigo.replace (/4/g, "o")
  codigo=codigo.replace (/5/g, "u")

   return codigo
}

// Desafio 10
function techList(tech,name) {
  if(tech.length === 0){
    return "Vazio!";
  }
  let tecnologies =[]
  tech.sort()
  for(let index in tech){
    tecnologies.push ({
      tech:tech[index],
      name,
      
    });
    
  }return tecnologies
}console.log(techList(["React","DOM","Back-end","Front-end","Ciência da Computação"],"Giovanna"));

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

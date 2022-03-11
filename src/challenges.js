// Desafio 1
function compareTrue(number1, number2) {
  if (number1 === true && number2 === true) {
    true
  } else {
    false;
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
  let name = '';
  let firstName = names[0];
  let lastName = names[names.length - 1];
  name = lastName +"," +firstName
  return name;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = 3 * wins;
  let empate = 1 * ties;
  let pontos = vitoria + empate;
  return pontos;
}

// Desafio 6
function highestCount(numeros) {
  let contador = 0;
  let maior = numeros[0];
  for (i = 0; i < numeros.length; i += 1) {
    if (maior < numeros[i]) {
      maior = i;
    }
    if (maior === numeros[i]) {
      contador += 1;
    }
  }
  return contador;
}
// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  let distanciaCat1 = (cat1 - mouse);
  let distanciaCat2 = (cat2 - mouse);
  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  } else if (distanciaCat2 < distanciaCat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
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

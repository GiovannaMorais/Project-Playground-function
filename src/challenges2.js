// Desafio 11
function generatePhoneNumber(phone) {
  let dd = `(${phone[0]}${phone[1]})`;
  let primeirosNum = `${phone[2]}${phone[3]}${phone[4]}${phone[5]}${phone[6]}`;
  let segundoNum = `${phone[7]}${phone[8]}${phone[9]}${phone[10]}`;
  let repetiçao = 0;

  if (phone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index of phone) {
    if (phone[index] < 0 || phone[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let repete in phone) {
      if (phone[repete] === phone[index]) {
        repetiçao += 1;
      }
    }
    if (repetiçao >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    repetiçao = 0;
  } return `${dd} ${primeirosNum}-${segundoNum}`;
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let dif = Math.abs(lineB - lineC) < lineA && Math.abs(lineA - lineB) < lineC && Math.abs(lineC - lineA) < lineB;
  let angulos = lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineB + lineA);
  if (angulos === true && dif === true) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(bebidas) { //  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match - (comando match())
  let numero = bebidas.match(/[1-9]/g); //  Todas os números de 1 a 9  são retornados, com cada número sendo um elemento string no array.( lista de números tirada da string)
  let soma = 0;
  for (let index = 0; index < numero.length; index += 1) {
    soma += Number(numero[index]); // Number () força o que está nos parenteses a vira do tipo number
  }
  if (soma === 1) {
    return '1 copo de água';
  }
  return `${soma} copos de água`;
}
module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};

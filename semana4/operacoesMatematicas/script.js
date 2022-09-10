let n1 = Number(prompt("Insira o 1º numero: "))
let n2 = Number(prompt("Insira o 2º numero: "))

const sum = n1 + n2
const sub = n1 - n2
const mult = n1 * n2
const div = (n1 / n2).toFixed(2)
const restDiv = n1 % n2

alert("A soma dos dois números é: " + sum)
alert("A subtração dos dois números é: " + sub)
alert("A multiplicação dos dois números é: " + mult)
alert("A divisão dos dois números é: " + div)
alert("O resto da divisão dos dois números é: " + restDiv)

if (sum % 2 === 0) {
  alert("a soma dos dois números é par: " + sum)
} else {
  alert("a soma dos dois números é ímpar: " + sum)
}

if (n1 === n2) {
  alert("Os números inseridos são iguais")
} else {
  alert("Os números inseridos são diferentes")
}
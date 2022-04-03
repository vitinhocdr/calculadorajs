function calculadora() {
  const operacao = Number(
    prompt(
      'Escolha uma operação \n1- Soma (+) \n2- Subtração (-) \n3- Multiplicação (*) \n4- Divisão Real (/) \n5- Divisão Inteira (%) \n6- Potenciação (**) '
    )
  )

  if (!operacao || operacao >= 7) {
    alert('Operação inválida')
    calculadora()
  }

  let n1 = Number(prompt('Insira o primeiro valor'))
  let n2 = Number(prompt('insira o segundo valor'))
  let resultado

  if (!n1 || !n2) {
    alert('Parametros Invalidos')
    calculadora()
  }

  function soma() {
    resultado = n1 + n2
    alert(`${n1} + ${n2} = ${resultado}`)
    novaOperacao()
  }

  function subtracao() {
    resultado = n1 - n2
    alert(`${n1} - ${n2} = ${resultado}`)
    novaOperacao()
  }

  function multiplicacao() {
    resultado = n1 * n2
    alert(`${n1} * ${n2} = ${resultado}`)
    novaOperacao()
  }

  function divisaoReal() {
    resultado = n1 / n2
    alert(`${n1} / ${n2} = ${resultado}`)
    novaOperacao()
  }

  function divisaoInteira() {
    resultado = n1 % n2
    alert(`${n1} % ${n2} = ${resultado}`)
    novaOperacao()
  }

  function potencia() {
    resultado = n1 ** n2
    alert(`${n1} ** ${n2} = ${resultado}`)
    novaOperacao()
  }

  function novaOperacao() {
    let opcao = prompt('Deseja fazer outra operação? \n1- Sim \n2- Não')
    if (opcao == 1) {
      calculadora()
    } else if (opcao == 2) {
      alert('Obrigado por utilizar a calculadora')
    } else {
      alert('Opção inválida')
      novaOperacao()
    }
  }

  switch (operacao) {
    case 1:
      soma()
      break
    case 2:
      subtracao()
      break
    case 3:
      multiplicacao()
      break
    case 4:
      divisaoReal()
      break
    case 5:
      divisaoInteira()
      break
    case 6:
      potencia()
      break
  }
}
calculadora()

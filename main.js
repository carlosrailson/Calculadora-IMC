const resultado = document.querySelector('.resultado') 
const calcular = document.querySelector('.button')

// função principal acionada com o click
function imc() {
  const calcular = document.querySelector('.button')
  const altura = Number(document.querySelector('#altura').value)
  const peso = Number(document.querySelector('#peso').value)
  removeClasses()

  const soma = peso / (altura ** altura) 

  // condições para verificar os inputs e retornar um resultado com informações coerentes:
  if (altura == '' && peso == '') {
    resultado.innerHTML = `<h2>Preenxa todos os campos</h2>`
  } else if (!altura || altura == '') {
    resultado.innerHTML = `<h2>Altura inválida! Tente novamente. Separe as casas decimais por ponto. Ex: altura (1.83)</h2>`
  } else if (!peso ||  peso == '' ) {
    resultado.innerHTML = `<h2>Peso inválido! Tente novamente. Separe as casas decimais por ponto. Ex: peso (63.57)</h2>`
  } else if (altura !== '' && peso !== ''){
    resultado.innerHTML = `<h2>Seu IMC: ${soma.toFixed(2)}</h2>`
  } 

  // Não consegui aplicar um laço de repetição para adicionar as classes, por isso o código ficou maior do que eu gostaria...
  if (soma > 1 && soma < 5 && altura !== 0) {
    resultado.innerHTML += '<h3> Verifique se você digitou as informações corretamente</h3>'
    resultado.classList.add('class-js-red')
  } else if (soma >= 5 && soma < 17 && altura !== 0) {
    resultado.innerHTML += '<h3>Cuidado! você está muito abaixo do seu peso ideal</h3>'
    resultado.classList.add('class-js-red')
  } else if (soma >= 17 && soma < 18.49 && altura !== 0) {
    resultado.innerHTML += '<h3>Você está abaixo do seu peso ideal</h3>'
    resultado.classList.add('class-js-yellow')
  } else if (soma >= 18.50 && soma < 24.99 && altura !== 0) {
    resultado.innerHTML += '<h3>Parabéns, você está em seu peso ideal</h3>'
    resultado.classList.add('class-js-green')
  } else if (soma >= 25 && soma < 29.99 && altura !== 0) {
    resultado.innerHTML += '<h3>Você está acima do seu peso ideal</h3>'
    resultado.classList.add('class-js-yellow')
  } else if (soma >= 30 && soma < 34.99 && altura !== 0) {
    resultado.innerHTML += '<h3>Você está em obesidade grau 1</h3>'
    resultado.classList.add('class-js-yellow')
  } else if (soma >= 35 && soma < 39.99 && altura !== 0) {
    resultado.innerHTML += '<h3>Cuidado! você está em obesidade severa</h3>'
    resultado.classList.add('class-js-red')
  } else if (soma >= 40 && soma < 200 && altura !== 0 && peso !== 0) {
    resultado.innerHTML += '<h3>Você está em obesidade mórbida, recomendamos que procure um nutricionista o mais rápido possível, seu caso está gravíssimo!</h3>' 
    resultado.classList.add('class-js-red') 
  } else if (soma > 200 && altura !== 0 && peso !== 0) {
    resultado.innerHTML += '<h3>Seu IMC está alto além do normal, verifique se você digitou as informações corretamente. Separe as casas decimais por ponto, ex: Altura (1.67)<</h3>' 
    resultado.classList.add('class-js-red') 
  } else if (soma < 5 && altura !== 0 && peso !== 0) {
    resultado.innerHTML += '<h3>Verifique se você digitou as informações corretamente. Separe as casas decimais por ponto, ex: Altura (1.67)</h3>' 
    resultado.classList.add('class-js-red')
  }
}

// função criada para apagar os valores do input
function limpar() {
  altura.value = ''
  peso.value = '' // remove os valores do input altura e peso
  resultado.innerHTML = '' // deixa o campo de resultado vazio ao clicar em limpar
  resultado.classList.remove('class-js-green')
  resultado.classList.remove('class-js-red') 
  resultado.classList.remove('class-js-yellow')
}

// remove todas as classes ao clicar em novamente em limpar
function removeClasses() {
  if (resultado.classList.contains = 'class-js-green') {
    resultado.classList.remove('class-js-yellow')
    resultado.classList.remove('class-js-red') 
  } else if (resultado.classList.contains = 'class-js-yellow') {
    resultado.classList.remove('class-js-green')
    resultado.classList.remove('class-js-red') 
  } else if (resultado.classList.contains = 'class-js-red') {
    resultado.classList.remove('class-js-green')
    resultado.classList.remove('class-js-yellow')
  }
}

calcular.addEventListener('click', imc)
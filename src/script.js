const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");
const btn = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");
const classificacao = document.getElementById("classificacao");

btn.addEventListener("click", calcularIMC);

function calcularIMC() {
  const peso = Number(pesoInput.value);
  const altura = Number(alturaInput.value);

  // validação básica
  if (peso <= 0 || altura <= 0) {
   document.getElementById("resultado").innerHTML = "Preencha peso e altura corretamente.";
    document.getElementById("classificacao").innerHTML= "";
    return;
  }

  const imc = peso / (altura * altura);
  const imcFinal = imc.toFixed(2);

  document.getElementById("resultado").innerHTML = `Seu IMC é ${imcFinal}`;

  // classificação
  if (imc < 18.5) {
    document.getElementById("classificacao").innerHTML = "Abaixo do peso";
  } else if (imc < 24.9) {
    document.getElementById("classificacao").innerHTML = "Peso normal";
  } else if (imc < 29.9) {
    document.getElementById("classificacao").innerHTML = "Sobrepeso";
  } else if (imc < 34.9) {
    document.getElementById("classificacao").innerHTML = "Obesidade grau I";
  } else if (imc < 39.9) {
    document.getElementById("classificacao").innerHTML = "Obesidade grau II";
  } else {
    document.getElementById("classificacao").innerHTML = "Obesidade grau III";
  }
}

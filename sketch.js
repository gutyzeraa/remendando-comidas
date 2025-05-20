function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let input;
let button;
let resultP;

function setup() {
  createCanvas(400, 200);
  background(220);

  // Pergunta
  let introP = createP('Qual tipo de comida você gosta?');
  introP.position(20, 5);

  // Campo de entrada de texto
  input = createInput();
  input.position(20, 50);

  // Botão para enviar
  button = createButton('Verificar');
  button.position(input.x + input.width + 10, 50);
  button.mousePressed(checkFood); // Chama a função checkFood quando o botão é clicado

  // Parágrafo para exibir o resultado
  resultP = createP('');
  resultP.position(20, 90);
  resultP.style('font-weight', 'bold');
}

function checkFood() {
  let food = input.value().toLowerCase(); // Pega o texto do input e converte para minúsculas

  if (food.includes('salada') || food.includes('fruta') || food.includes('vegetais') || food.includes('legumes') || food.includes('grãos integrais')) {
    resultP.html('Isso é **ótimo**! Manter uma alimentação rica em nutrientes é uma excelente escolha para a sua saúde e bem-estar geral.');
    resultP.style('color', 'green');
  } else if (food.includes('pizza') || food.includes('hambúrguer') || food.includes('batata frita') || food.includes('refrigerante') || food.includes('doce') || food.includes('fritura')) {
    resultP.html('Comidas mais densas em calorias podem ser apreciadas com moderação. Para manter o equilíbrio, incluir atividades físicas regulares pode ser uma ótima ideia!');
    resultP.style('color', 'orange');
  } else {
    resultP.html('Interessante! O ideal é sempre buscar um equilíbrio na alimentação, aproveitando uma variedade de alimentos.');
    resultP.style('color', 'blue');
  }
}

function draw() {
  // Nada para desenhar continuamente neste exemplo, a interação é por input do usuário.
}

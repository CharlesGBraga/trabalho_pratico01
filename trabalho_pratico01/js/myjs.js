// Garante que a página esteja carregaa
window.addEventListener('load', start);

// Implementando a função Start
function start() {
  console.log('Página carregada');

  var colors = Array;
  colors[0] = 0;
  colors[1] = 0;
  colors[2] = 0;

  setColor(colors);

  // Capturando os valores do Input Range
  var range_r = document.querySelector('#R');
  range_r.addEventListener('input', changeValues);

  var range_g = document.querySelector('#G');
  range_g.addEventListener('input', changeValues);

  var range_b = document.querySelector('#B');
  range_b.addEventListener('input', changeValues);
}

function changeValues(event) {
  var colors = Array;

  // Capturando calores do Input Desabilitado
  var R_input = document.querySelector('#Rinput');
  var G_input = document.querySelector('#Ginput');
  var B_input = document.querySelector('#Binput');

  // Salvando o valor do Event
  var target_event_id = event.target.id;

  // prettier-ignore
  if (target_event_id === 'R') {
    R_input.value = event.target.value;
    var red = event.target.value;
    colors[0] = red;
} else if (target_event_id === 'G') {
  G_input.value = event.target.value;
  var green = G_input.value;
  colors[1] = green;
  } else if (target_event_id === 'B') {
  B_input.value = event.target.value;
  var blue = B_input.value;
  colors[2] = blue;
  }
  setColor(colors);
}
function setColor(colors = 0) {
  var RGB = colors[0] + ',' + colors[1] + ',' + colors[2];

  var rgb_result = (document.querySelector(
    '#rgb_result'
  ).style.backgroundColor = 'rgb(' + RGB + ')');
  console.log(rgb_result);
}

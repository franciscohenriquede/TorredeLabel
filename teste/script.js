//um teste  para verificar a funcionalidade do fnunção clicar , para retorna o valor do id da classe clicada

const items = document.querySelectorAll(".item");

items.forEach(item => {
  item.addEventListener("click", handleClick);
});

function handleClick(event) {
  const clickedElement = event.target;
  const clickedElementId = clickedElement.id;
  const clickedElementValue = clickedElement.textContent;
  const positionX = clickedElement.getBoundingClientRect().left;
  const positionY = clickedElement.getBoundingClientRect().top;


if(clickedElementId != 'item-1'){
alert("la");
}
  console.log(`ID do elemento clicado: ${clickedElementId}`);
  console.log(`Valor do elemento clicado: ${clickedElementValue}`);
  console.log(`Posição X do clique: ${positionX}`);
  console.log(`Posição Y do clique: ${positionY}`);




}

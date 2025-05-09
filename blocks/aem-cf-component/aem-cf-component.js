export default function decorate(block) {
  console.log("block from cf component page", block);

  const divWrapper = document.createElement("div");

  block.textContent = "";
  block.append(divWrapper);
}

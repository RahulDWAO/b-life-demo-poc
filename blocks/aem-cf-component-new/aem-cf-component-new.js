export default function decorate(block) {
  debugger
  console.log("block normal cf component it is by ID", block);

  const divWrapper = document.createElement("div");

  block.textContent = "";
  block.append(divWrapper);
}

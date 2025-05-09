export default function decorate(block) {
  console.log("block normal cf component it is by ID", block);
  block.textContent = "";
  block.append(block);
}

export default function decorate(block) {
  console.log("block from cf component page", block);
  block.textContent = "";
  block.append(block);
}

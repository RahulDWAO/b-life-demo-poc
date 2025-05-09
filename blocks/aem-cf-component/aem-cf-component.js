export default function decorate(block) {
  console.log("block from cf component page", block);

  const link = block.querySelector('a');
  const path = link ? link.getAttribute('href') : block.textContent.trim();

  block.textContent = "";
  block.append(path);
}

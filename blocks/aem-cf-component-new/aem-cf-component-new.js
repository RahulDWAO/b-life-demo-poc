export default function decorate(block) {
  console.log("block normal cf component it is by ID", block);

  const link = block.querySelector('a');
  const path = link ? link.getAttribute('href') : block.textContent.trim();

  block.textContent = "";
  block.append(path);
}




export function generateAccordionCF(block) {
  debugger
  console.log("acc  blok", block)
  const details = document.createElement('details');
  const summary = document.createElement('summary');
  details.append(summary);
}

export default function decorate(block) {
  const dom = generateAccordionCF(block);
  block.textContent = '';
  block.append(dom);
}

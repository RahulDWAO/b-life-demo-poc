import { generateAccordionDOM } from '../accordion/accordion.js';
import{getContentFragmentData} from '../../scripts/cf-service.js'

export default function decorate(block) {
  // each row is an accordion entry
  debugger
  console.log("from grp block",block);
  try {
    let cfPath=block.children[3].textContent.trim()
  const block=block.children[3].remove();
  console.log("blockcfpath",cfPath);
  getContentFragmentData(cfPath)
  } catch (error) {
    
  }
 
  const accordions = [...block.children];

  // loop through all accordion blocks
  [...accordions].forEach((accordion) => {
    // generate the accordion
    const accordionDOM = generateAccordionDOM(accordion);
    // empty the content ,keep root element with UE instrumentation
    accordion.textContent = '';
    // add block classes
    accordion.classList.add('accordion', 'block');
    accordion.append(accordionDOM);
  });

  // use same styling as shade-box from /docs
  block.classList.add('shade-box');
}

/*
 * Fragment Block
 * Include content on a page as a fragment.
 * https://www.aem.live/developer/block-collection/fragment
 */

import {
    decorateMain,
  } from '../../scripts/scripts.js';
  
  import {
    loadSections,
  } from '../../scripts/aem.js';
  
  /**
   * Loads a fragment.
   * @param {string} path The path to the fragment
   * @returns {HTMLElement} The root element of the fragment
   */
  export async function loadFragment(path) {
    if (path && path.startsWith('/')) {
        debugger
      // eslint-disable-next-line no-param-reassign
      path = path.replace(/(\.plain)?\.html/, '');
      const resp = await fetch("https://author-p102857-e1312424.adobeaemcloud.com/content/dam/bandhan-life-ue-demo/accordian/demo.-1.json");
      if (resp.ok) {
        console.log(resp,"resp")
        const main = document.createElement('main');
        let resp1= await resp.text();
        
        // reset base path for media to fragment base
        // const resetAttributeBase = (tag, attr) => {
        //   main.querySelectorAll(`${tag}[${attr}^="./media_"]`).forEach((elem) => {
        //     elem[attr] = new URL(elem.getAttribute(attr), new URL(path, window.location)).href;
        //   });
        // };
        // resetAttributeBase('img', 'src');
        // resetAttributeBase('source', 'srcset');
  
        // decorateMain(main);
        // await loadSections(main);
        return main;
      }
    }
    return null;
  }
  
  export default async function decorate(block) {
    const link = block.querySelector('a');
    const path = link ? link.getAttribute('href') : block.textContent.trim();
    const fragment = await loadFragment(path);
    if (fragment) {
      const fragmentSection = fragment.querySelector(':scope .section');
      if (fragmentSection) {
        block.classList.add(...fragmentSection.classList);
        block.classList.remove('section');
        block.replaceChildren(...fragmentSection.childNodes);
      }
    }
  }
  
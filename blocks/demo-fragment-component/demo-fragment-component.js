/*
 * Fragment Block
 * Include content on a page as a fragment.
 * https://www.aem.live/developer/block-collection/fragment
 */

import { decorateMain,CFApiCall } from "../../scripts/scripts.js";

import { loadSections } from "../../scripts/aem.js";

/**
 * Loads a fragment.
 * @param {string} path The path to the fragment
 * @returns {HTMLElement} The root element of the fragment
 */
// export async function loadFragment(path) {
//   if (path && path.startsWith("/")) {
//     debugger;
//     console.log("path",path)
//     // eslint-disable-next-line no-param-reassign
//     path = path.replace(/(\.plain)?\.html/, "");
//     const resp = await fetch(
//       "https://author-p102857-e1312424.adobeaemcloud.com/content/dam/bandhan-life-ue-demo/accordian/demo.-1.json"
//     );
//     if (resp.ok) {
//       console.log(resp, "resp");
//       const main = document.createElement("main");
//       let resp1 = await resp.text();
//       let finalResp = JSON.parse(resp1)["jcr:content"].data.master;
//       // reset base path for media to fragment base
//       // const resetAttributeBase = (tag, attr) => {
//       //   main.querySelectorAll(`${tag}[${attr}^="./media_"]`).forEach((elem) => {
//       //     elem[attr] = new URL(elem.getAttribute(attr), new URL(path, window.location)).href;
//       //   });
//       // };
//       // resetAttributeBase('img', 'src');
//       // resetAttributeBase('source', 'srcset');

//       // decorateMain(main);
//       // await loadSections(main);
//       return main;
//     }
//   }
//   return null;
// }


export function fetchData(url) {
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
        'credentials': 'include' 
    }
  })
    .then(response => {
      console.log(response,"response")
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Response JSON:', data);
      return data;
    })
    .catch(error => {
      console.error('Fetch error:', error);
      throw error;
    });
}
// export function fetchData(url) {
//   return fetch(url, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//     .then(response => {
//       debugger
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       debugger
//       console.log('Response JSON:', data);
//       return data;
//     })
//     .catch(error => {
//       console.error('Fetch error:', error);
//       throw error;
//     });
// }
export default async function decorate(block) {
  const link = block.querySelector("a");
  const path = link ? link.getAttribute("href") : block.textContent.trim();

  fetchData('https://author-p102857-e1312424.adobeaemcloud.com/graphql/execute.json/bandhan-life-ue-demo/demo')
  // const cfRepsonse = path && await CFApiCall("https://author-p102857-e1312424.adobeaemcloud.com/content/dam/bandhan-life-ue-demo/accordian/demo.json");
  // const repsonseData = cfRepsonse.data;
// console.log("cfresp",repsonseData);


// Example usage:
// fetchData('https://author-p102857-e1312424.adobeaemcloud.com/content/dam/bandhan-life-ue-demo/accordian/demo.-1.json');

  // const fragment = await loadFragment(path);
  // console.log("fragment",fragment);
  
//   if (fragment) {
//     const fragmentSection = fragment.querySelector(":scope .section");
//     if (fragmentSection) {
//       let html = `<div class="section accordion-group-container" data-section-status="loaded">

//   <div class="accordion-group-wrapper">
//     <div class="accordion-group acc-grp block" data-block-name="accordion-group" data-block-status="loaded">
      
//   </div>

// </div>`;

// let innerAcc=` <div class="accordion block">
//         <details>
//           <summary>
//             <h3 id="how-safe-is-your-life-insurance-policy">${aassa}</h3>
//           </summary>
//           <div>
//             <p>${ds}</p>
//           </div>
//         </details>
//       </div>`


//       block.classList.add(...fragmentSection.classList);
//       block.classList.remove("section");
//       block.replaceChildren();
//     }
//   }
}

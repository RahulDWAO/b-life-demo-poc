// export default function decorate(block) {
//   console.log("gender", block);
//   debugger;
//   const blocklist = [...block.children];
//   const div = document.createElement("div");

//   [...blocklist].forEach((block, index) => {
//     switch (index) {
//       case 0:
//         const labelText = div.textContent.trim();

//         const label = document.createElement("h2");
//         // const input = document.createElement("input");

//         // Set attributes for input and label
//         // input.type = "text";
//         // input.id = "genderInput";
//         // label.htmlFor = input.id;
//         label.textContent = labelText;
//         div.append(label);
//         break;
//       case 1:
//         const items = p.textContent.split(",").map((item) => item.trim());

//         // Create a <ul> element
//         const ul = document.createElement("ul");

//         // Create and append <li> elements for each item
//         items.forEach((item) => {
//           const li = document.createElement("li");
//           li.textContent = item;
//           ul.appendChild(li);
//         });

//         div.append(ul);
//         break;
//       default:
//         // Logic for all other blocks
//         console.log(`Block ${index}:`, block);
//         break;
//     }
//     //   debugger
//     //   const labelText = div.textContent.trim();

//     //   const label = document.createElement('label');
//     //   const input = document.createElement('input');

//     //   // Set attributes for input and label
//     //   input.type = 'text';
//     //   input.id = 'genderInput';
//     //   label.htmlFor = input.id;
//     //   label.textContent = labelText;

//     //   const items = p.textContent.split(',').map(item => item.trim());

//     // // Create a <ul> element
//     // const ul = document.createElement('ul');

//     // // Create and append <li> elements for each item
//     // items.forEach(item => {
//     //   const li = document.createElement('li');
//     //   li.textContent = item;
//     //   ul.appendChild(li);
//     // });
//   });
//   block.textContent = "";
//   block.append(div);
// // }
export default function decorate(block) {
  console.log('gender', block);
  const blocklist = [...block.children];
  const wrapperDiv = document.createElement('div');

  blocklist.forEach((child, index) => {
    switch (index) {
      case 0:
        // Get text from the first block (e.g., "Gender")
        const labelText = child.textContent.trim();

        // Create a label/header
        const label = document.createElement('h2');
        label.textContent = labelText;

        wrapperDiv.appendChild(label);
        break;

      case 1:
        // Get text like "male,female,others" from second block
        const text = child.textContent.trim();
        const items = text.split(',').map((item) => item.trim());

        const ul = document.createElement('ul');
        items.forEach((item) => {
          const li = document.createElement('li');
          li.textContent = item;
          ul.appendChild(li);
        });

        wrapperDiv.appendChild(ul);
        break;

      default:
        console.log(`Unhandled block index ${index}`, child);
        break;
    }
  });

  // Clear original content and append new structure
  block.textContent = '';
  block.appendChild(wrapperDiv);
}

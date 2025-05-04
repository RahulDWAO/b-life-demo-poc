
export default function decorate(block) {
  console.log("gender", block);
  const blocklist = [...block.children];
  const wrapperDiv = document.createElement("div");
  
  blocklist.forEach((child, index) => {
    switch (index) {
      case 0:
        // Get text from the first block (e.g., "Gender")
        const labelText = child.textContent.trim();
  
        // Create a label/header
        const label = document.createElement("h2");
        label.textContent = labelText;
  
        wrapperDiv.appendChild(label);
        break;
  
      case 1:
        // Get text like "male,female,others" from second block
        const text = child.textContent.trim();
        const items = text.split(",").map(item => item.trim());
  
        const ul = document.createElement("ul");
        items.forEach(item => {
          const li = document.createElement("li");
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
  block.textContent = "";
  block.appendChild(wrapperDiv);
  
}

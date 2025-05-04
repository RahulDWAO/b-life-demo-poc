
export default function decorate(block) {

    console.log("dropdown block",  block)

// const dropdown = document.getElementById("dropdown");

// // Get the two children
// const labelWrapper = dropdown.children[0];
// const optionsWrapper = dropdown.children[1];

// // Style the dropdown for usability
// dropdown.style.position = "relative";
// labelWrapper.style.cursor = "pointer";
// labelWrapper.style.padding = "8px";
// labelWrapper.style.background = "#eee";
// labelWrapper.style.border = "1px solid #ccc";

// optionsWrapper.style.display = "none";
// optionsWrapper.style.position = "absolute";
// optionsWrapper.style.top = "100%";
// optionsWrapper.style.left = "0";
// optionsWrapper.style.background = "#fff";
// optionsWrapper.style.border = "1px solid #ccc";
// optionsWrapper.style.zIndex = "1000";

// // Show/hide on label click
// labelWrapper.addEventListener("click", () => {
//   const isOpen = optionsWrapper.style.display === "block";
//   optionsWrapper.style.display = isOpen ? "none" : "block";
// });

// // Handle selecting an option
// Array.from(optionsWrapper.children).forEach(optionDiv => {
//   optionDiv.style.padding = "8px";
//   optionDiv.style.cursor = "pointer";
//   optionDiv.addEventListener("click", () => {
//     const labelText = optionDiv.textContent.trim();
//     labelWrapper.querySelector("p").textContent = labelText;
//     optionsWrapper.style.display = "none";
//   });
// });

// // Optional: Close dropdown when clicking outside
// document.addEventListener("click", (e) => {
//   if (!dropdown.contains(e.target)) {
//     optionsWrapper.style.display = "none";
//   }
// });
}

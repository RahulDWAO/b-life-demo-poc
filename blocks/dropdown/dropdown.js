export default function decorate(block) {
  console.log("dropdown block", block);


  const dropDopwnLabel = block.children[0].textContent.trim();
  const dropDownValue = block.children[1].textContent.trim().split(",");
  // const dropdown = document.getElementById("dropdown");
  const divwrapper = document.createElement("div")

  const labelEl = document.createElement("label");
  labelEl.textContent = dropDopwnLabel;
  divwrapper.append(labelEl);

  const select = document.createElement("select");
  dropDownValue.forEach((e) => {
    console.log(e)
    const option = document.createElement("option");
    option.value = e;
    option.textContent = e;
    select.append(option);

  });
  divwrapper.append(select);

  block.textContent = "";
  block.append(divwrapper);
  
}

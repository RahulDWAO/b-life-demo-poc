// import { isAuthorEnvironment } from "../../scripts/scripts";

async function fetchAPI(method, url, data) {
  return new Promise(async (resolve, reject) => {
    try {
      if (method === 'GET') {
        const resp = await fetch(url);
        resolve(resp);
      } else if (method === 'POST') {
        data.headerJson = data.headerJson || {
          'Content-Type': 'application/json',
        };

        if (data.headerJson['Content-Type'] == 'remove') {
          data.headerJson['Content-Type'] = '';
        } else {
          data.headerJson['Content-Type'] = data.headerJson['Content-Type'] ? data.headerJson['Content-Type'] : 'application/json';
        }

        /* Optimzie Code */
        /* data.headerJson = data.headerJson || {};
        data.headerJson["Content-Type"] = data.headerJson["Content-Type"] === 'remove' ? '' : data.headerJson["Content-Type"] || "application/json"; */

        const request = new Request(url, {
          method: 'POST',
          body: JSON.stringify(data.requestJson),
          headers: data.headerJson,
        });
        const response = await fetch(request);
        const json = await response.json();
        resolve({ responseJson: json });
      }
    } catch (error) {
      console.warn(error);
      reject(error);
    }
  });
}

export default async function decorate(block) {
// const isAuthor=isAuthorEnvironment();
  const link = block.querySelector('a');
  const path = link ? link.getAttribute('href') : block.textContent.trim();
  console.log(path, 'path');

  // if(isAuthor){
  //   path=path
  // }
  //  resp  await fetchAPI("GET", path);
  const response = await fetchAPI('GET', path);
  const responseJson = await response.json();
  const divEl11 = document.createElement('div');

  const divtable = document.createElement('div');
  const table = document.createElement('table');
  table.border = '1';
  table.cellPadding = '5';

  const headerRow = table.insertRow();
  const headers = Object.keys(responseJson.data[0]);

  headers.forEach((key) => {
    const th = document.createElement('th');
    th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
    headerRow.appendChild(th);
  });

  // Create table rows
  responseJson.data.forEach((item) => {
    const row = table.insertRow();
    headers.forEach((key) => {
      const cell = row.insertCell();
      cell.textContent = item[key];
    });
  });
  divtable.append(table);

  divEl11.append(divtable);

  block.textContent = '';
  block.append(divEl11);
}

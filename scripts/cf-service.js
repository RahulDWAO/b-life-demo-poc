// export function getContentFragmentData(url) {

//   console.log("cfpath",url);

//   const myHeaders = new Headers();
//   myHeaders.append("accept", "application/json");
//   myHeaders.append("accept-language", "en-GB,en-US;q=0.9,en;q=0.8");
//   myHeaders.append("content-type", "application/json");
//   myHeaders.append(
//     "csrf-token",
//     "eyJleHAiOjE3NDYyNjA4OTIsImlhdCI6MTc0NjI2MDI5Mn0.1G6ox4aw8Wr0xWSOsqRTJLyZYcSgVKI8FVumRsaMK8k"
//   );
//   myHeaders.append(
//     "origin",
//     "https://author-p102857-e1312424.adobeaemcloud.com"
//   );
//   myHeaders.append("priority", "u=0, i");
//   myHeaders.append(
//     "referer",
//     "https://author-p102857-e1312424.adobeaemcloud.com/aem/graphiql.html?appId=aemshell"
//   );
//   myHeaders.append(
//     "sec-ch-ua",
//     '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"'
//   );
//   myHeaders.append("sec-ch-ua-mobile", "?0");
//   myHeaders.append("sec-ch-ua-platform", '"macOS"');
//   myHeaders.append("sec-fetch-dest", "empty");
//   myHeaders.append("sec-fetch-mode", "cors");
//   myHeaders.append("sec-fetch-site", "same-origin");
//   myHeaders.append(
//     "user-agent",
//     "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36"
//   );
//   myHeaders.append(
//     "Cookie",
//     'cq-authoring-mode=TOUCH; AMCV_8F99160E571FC0427F000101%40AdobeOrg=-1124106680%7CMCMID%7C30357893584790271915630201582370639621%7CMCAID%7CNONE%7CvVersion%7C5.2.0; cq-workflow-inbox=list; cq-sites-pages-pages=column; wcmmode=edit; SessionPersistence=PROFILEDATA%3A%3DauthorizableId%253Danonymous; cq-editor-layer.page=Edit; cq-editor-sidepanel=open; rail-cq-sites-pages-pages=content-only; AMCV_9E1005A551ED61CA0A490D45%40AdobeOrg=MCMID|56291187676536631450767052039230939478; uinfo=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDU5OTAwNzgsImlhdCI6MTc0NTk5MDA3OCwidXNlcklkIjoiOTZBQjI4M0M2NDEwMkMxQzBBNDk1QzRCQDBhNmQ1OWVjNWVmZjA0MjkwYTQ5NWY5MiIsImF1dGhJZCI6Ijk2QUIyODNDNjQxMDJDMUMwQTQ5NUM0QkAwYTZkNTllYzVlZmYwNDI5MGE0OTVmOTIiLCJwcmluY2lwYWxJZCI6IlJhaHVsYWdnYXJ3YWxAZHdhby5pbiIsImNsaWVudElkIjoiZXhjX2FwcCIsInNvdXJjZSI6Ikltc1Rva2VuIn0.CtJKRP9C_YDvQXykCifP3fegNVPNCDp1TjFOxU2exmA; oauth-configid=ims; web-p102857-e1312424-eebcd4fb-135b-4269-9605-bdaae6d15f55="{205bc78702912b3ad36b703367f1341ee01f5a521a2c8aba6093de169465c5e4ca05673950523b1c2e1a5b0f7140f6c2e56cc22befa52bcdb2e11eb02ff76344979eb5356308152cf38966ea8172d86be960c96f1bd48157c10e11d44b3cf336377c50e357ce28a1b54ff0a7de77b1bf3d9d9acbefa19fbded6f30dabb6a984cd2c0c580794510ce9398eaca0e6d71e5}"; oauth-authid=ims; cq-assets-files-files=card; granite-security-users-users=list; 2Wleb4zDUQDCdmUBjLzvyw=card; kndctr_9E1005A551ED61CA0A490D45_AdobeOrg_identity=CiY1NjI5MTE4NzY3NjUzNjYzMTQ1MDc2NzA1MjAzOTIzMDkzOTQ3OFIRCMiO3IHoMhgBKgRJTkQxMAHwAafq-P_oMg==; login-token=login%3aeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSYWh1bGFnZ2Fyd2FsQGR3YW8uaW4iLCJleHAiOjE3NDYyNjY5NzksImlhdCI6MTc0NjIyMzc3OSwic2NvcGUiOiJsb2dpbiJ9.EwanYW2r-J0Kc7Phq1KVRcsoGTEFp9z1fgLb5-twwgM%3acrx.default; affinity="f034200e034df439"; cq-cfm-editor-sidepanel=open; wa4ZnWquIpghZitL-hmiLw=list; kndctr_8F99160E571FC0427F000101_AdobeOrg_cluster=ind1; kndctr_8F99160E571FC0427F000101_AdobeOrg_identity=CiYxNDUyNTAwNzA3ODcyMjk1NTAzMDY5ODcwOTgxMzYwNTg4NzA3NFITCJ722oHoMhABGAEqBElORDEwAPABksTIqeky; apt.uid=AP-AULLRFDZLJ9K-2-1746249311345-38152569.0.2.60864872-dce9-4c90-ac1d-54da74aa9c9e; apt.sid=AP-AULLRFDZLJ9K-2-1746257053556-56445915'
//   );

//   // const urlpath = "/content/dam/bandhan-life-ue-demo/accordian/demo"; // Your dynamic path

//   const graphqlstring = JSON.stringify({
//     query: `
//     {
//       demoAccByPath(_path: "${url}") {
//         item {
//           _path
//           _id
//           title
//           description {
//             plaintext
//           }
//         }
//       }
//     }
//   `,
//     variables: {},
//   });

//   const requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: graphqlstring,
//     redirect: "follow",
//   };

//   fetch(
//     "https://author-p102857-e1312424.adobeaemcloud.com/content/cq:graphql/bandhan-life-ue-demo/endpoint.json",
//     requestOptions
//   )
//     .then((response) => response.text())
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error));
// }

export function getCaroselCreated() {
  document.addEventListener("DOMContentLoaded", (event) => {
    const track = document.querySelector(
      ".ban-why-choose-model > .cards-wrapper ul"
    );
    const parentdiv = document.querySelector(
      ".ban-why-choose-model > .cards-wrapper"
    );

    // Create buttons
    const nextButtoncreate = document.createElement("button");
    nextButtoncreate.classList.add("carousel-button", "next");
    nextButtoncreate.innerText = "›";

    const prevButtoncreate = document.createElement("button");
    prevButtoncreate.classList.add("carousel-button", "prev");
    prevButtoncreate.innerText = "‹";

    parentdiv.appendChild(prevButtoncreate);
    parentdiv.appendChild(nextButtoncreate);

    const slides = Array.from(track.children);
    let currentIndex = 0;

    function updateSlidePosition() {
      const slideWidth = slides[0].getBoundingClientRect().width;
      track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }

    nextButtoncreate.addEventListener("click", () => {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSlidePosition();
      }
    });

    prevButtoncreate.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlidePosition();
      }
    });
  });
}

getCaroselCreated();

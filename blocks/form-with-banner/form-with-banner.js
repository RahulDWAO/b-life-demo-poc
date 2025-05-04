export default function decorate(block) {
  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  const divElMain = document.createElement('div');
  divElMain.setAttribute('class', 'agn-home-banner-homepage__container flex-row py-0');

  const divEl = document.createElement('div');
  divEl.setAttribute('class', 'flex-column col-lg-6 order-lg-2');

  const agn_pictureEl = document.createElement('agn-picture');
  agn_pictureEl.setAttribute('class', 'd-lg-block d-none hydrated');

  const pictureEl = document.createElement('picture');
  pictureEl.setAttribute('class', 'banner-image style2');

  const sourceEl = document.createElement('source');
  sourceEl.setAttribute('media', '(max-width:768px)');
  sourceEl.setAttribute('srcset', 'https://www.bandhanlife.com/staticassets/styles/homepage_mobile_banner/public/2025-01/iinvest-advantage-Banner-2025-new.webp?itok=HxDWqqI4');
  pictureEl.append(sourceEl);

  const sourceEl2 = document.createElement('source');
  sourceEl2.setAttribute('media', '(min-width:768px)');
  sourceEl2.setAttribute('srcset', 'https://www.bandhanlife.com/staticassets/styles/homepage_desktop_banner/public/2025-01/iinvest-advantage-Banner-2025-new.webp?itok=e1HY6uAT');
  pictureEl.append(sourceEl2);

  const imgEl = document.createElement('img');
  imgEl.setAttribute('src', 'https://www.bandhanlife.com/staticassets/styles/homepage_desktop_banner/public/2025-01/iinvest-advantage-Banner-2025-new.webp?itok=e1HY6uAT');
  imgEl.setAttribute('alt', 'img');
  imgEl.setAttribute('height', '650');
  imgEl.setAttribute('width', '1069');
  imgEl.setAttribute('loading', 'lazy');
  pictureEl.append(imgEl);
  agn_pictureEl.append(pictureEl);
  divEl.append(agn_pictureEl);
  divElMain.append(divEl)
  container.append(divElMain);

  const divEl2 = document.createElement('div');
  divEl2.setAttribute('class', 'flex-column col-lg-6 order-lg-1 home-page-banner-form');

  const divEl3 = document.createElement('div');
  divEl3.setAttribute('class', 'banner-content');

  const h5El = document.createElement('h5');
  h5El.setAttribute('class', 'sub-title mb-1 mt-1');
  h5El.textContent = 'IN ULIPS, THE INVESTMENT RISK IN INVESTMENT PORTFOLIO IS BORNE BY THE POLICYHOLDER';
  divEl3.append(h5El);

  const h1El = document.createElement('h1');
  h1El.setAttribute('class', 'sub-title');

  const spanEl = document.createElement('span');
  spanEl.setAttribute('class', 'badge badge-danger text-white');
  spanEl.textContent = 'New';
  h1El.append(spanEl);
  divEl3.append(h1El);

  const h6El = document.createElement('h6');
  h6El.setAttribute('class', 'title');

  const pEl = document.createElement('p');
  pEl.textContent = 'Fuel Your Wealth, Protect Your Future';
  h6El.append(pEl);
  divEl3.append(h6El);

  const agn_pictureEl2 = document.createElement('agn-picture');
  agn_pictureEl2.setAttribute('class', 'd-lg-none d-block mb-4 hydrated');

  const pictureEl2 = document.createElement('picture');
  pictureEl2.setAttribute('class', 'banner-image style2');

  const sourceEl3 = document.createElement('source');
  sourceEl3.setAttribute('media', '(max-width:768px)');
  sourceEl3.setAttribute('srcset', 'https://www.bandhanlife.com/staticassets/styles/homepage_mobile_banner/public/2025-01/iinvest-advantage-Banner-2025-new.webp?itok=HxDWqqI4');
  pictureEl2.append(sourceEl3);

  const sourceEl4 = document.createElement('source');
  sourceEl4.setAttribute('media', '(min-width:768px)');
  sourceEl4.setAttribute('srcset', 'https://www.bandhanlife.com/staticassets/styles/homepage_desktop_banner/public/2025-01/iinvest-advantage-Banner-2025-new.webp?itok=e1HY6uAT');
  pictureEl2.append(sourceEl4);

  const imgEl2 = document.createElement('img');
  imgEl2.setAttribute('src', 'https://www.bandhanlife.com/staticassets/styles/homepage_desktop_banner/public/2025-01/iinvest-advantage-Banner-2025-new.webp?itok=e1HY6uAT');
  imgEl2.setAttribute('alt', 'img');
  imgEl2.setAttribute('height', '650');
  imgEl2.setAttribute('width', '1069');
  imgEl2.setAttribute('loading', 'lazy');
  pictureEl2.append(imgEl2);
  agn_pictureEl2.append(pictureEl2);
  divEl3.append(agn_pictureEl2);

  const divEl4 = document.createElement('div');
  divEl4.setAttribute('class', 'box');

  const divEl5 = document.createElement('div');
  divEl5.setAttribute('class', 'box-body');

  const divEl6 = document.createElement('div');
  divEl6.setAttribute('class', 'step-1 active');

  const divEl7 = document.createElement('div');

  const divEl8 = document.createElement('div');
  divEl8.setAttribute('class', 'tab-group mb-3');

  const h4El = document.createElement('h4');
  h4El.textContent = 'Gender';
  divEl8.append(h4El);

  const ulEl = document.createElement('ul');
  ulEl.setAttribute('class', 'nav nav-tabs');
  ulEl.setAttribute('id', 'itermTab');
  ulEl.setAttribute('role', 'tablist');

  const liEl = document.createElement('li');
  liEl.setAttribute('class', 'nav-item');

  const aEl = document.createElement('a');
  aEl.setAttribute('class', 'nav-link active');
  aEl.textContent = 'Male';
  liEl.append(aEl);
  ulEl.append(liEl);

  const liEl2 = document.createElement('li');
  liEl2.setAttribute('class', 'nav-item');

  const aEl2 = document.createElement('a');
  aEl2.setAttribute('class', 'nav-link');
  aEl2.textContent = 'Female';
  liEl2.append(aEl2);
  ulEl.append(liEl2);

  const liEl3 = document.createElement('li');
  liEl3.setAttribute('class', 'nav-item');

  const aEl3 = document.createElement('a');
  aEl3.setAttribute('class', 'nav-link');
  aEl3.textContent = 'Others';
  liEl3.append(aEl3);
  ulEl.append(liEl3);
  divEl8.append(ulEl);
  divEl7.append(divEl8);

  const divEl9 = document.createElement('div');

  const divEl10 = document.createElement('div');
  divEl10.setAttribute('class', 'tab-content');
  divEl10.setAttribute('id', 'itermContent');

  const divEl11 = document.createElement('div');
  divEl11.setAttribute('class', 'tab-pane fade show active');
  divEl11.setAttribute('id', 'male');
  divEl11.setAttribute('role', 'tabpanel');
  divEl11.setAttribute('aria-labelledby', 'male-tab');

  const divEl12 = document.createElement('div');
  divEl12.setAttribute('class', 'form');

  const divEl13 = document.createElement('div');
  divEl13.setAttribute('class', 'flex-row mb-2 input-group-step');

  const divEl14 = document.createElement('div');
  divEl14.setAttribute('class', 'flex-column col-lg-6 col-md-6 form-group-age padding-right-0 mb-2');

  const divEl15 = document.createElement('div');
  divEl15.setAttribute('class', 'form-group mb-3');

  const agn_inputEl = document.createElement('agn-input');
  agn_inputEl.setAttribute('input-place-holder', 'Eg 40 years');
  agn_inputEl.setAttribute('class', 'hydrated');

  const divEl16 = document.createElement('div');
  divEl16.setAttribute('class', 'agn-input-container');

  const labelEl = document.createElement('label');

  const spanEl2 = document.createElement('span');

  const smallEl = document.createElement('small');
  smallEl.textContent = 'As per PAN';
  spanEl2.append(smallEl);
  labelEl.append(spanEl2);
  divEl16.append(labelEl);

  const inputEl = document.createElement('input');
  inputEl.setAttribute('class', 'form-control');
  inputEl.setAttribute('autocomplete', 'on');
  inputEl.setAttribute('required', '');
  inputEl.setAttribute('inputmode', 'numeric');
  inputEl.setAttribute('type', 'text');
  inputEl.setAttribute('placeholder', 'Eg 40 years');
  inputEl.setAttribute('maxlength', '2');
  inputEl.setAttribute('id', '1');
  divEl16.append(inputEl);

  const pEl2 = document.createElement('p');
  pEl2.setAttribute('class', 'input-error-msg');
  divEl16.append(pEl2);
  agn_inputEl.append(divEl16);
  divEl15.append(agn_inputEl);
  divEl14.append(divEl15);
  divEl13.append(divEl14);

  const divEl17 = document.createElement('div');
  divEl17.setAttribute('class', 'flex-column col-lg-6 col-md-6 padding-right-0 mb-2');

  const divEl18 = document.createElement('div');
  divEl18.setAttribute('class', 'form-group');

  const agn_inputEl2 = document.createElement('agn-input');
  agn_inputEl2.setAttribute('input-place-holder', 'XXXXXXXXXX');
  agn_inputEl2.setAttribute('value', '');
  agn_inputEl2.setAttribute('class', 'hydrated');

  const divEl19 = document.createElement('div');
  divEl19.setAttribute('class', 'agn-input-container');

  const divEl20 = document.createElement('div');
  divEl20.setAttribute('class', 'input-group');

  const labelEl2 = document.createElement('label');

  const smallEl2 = document.createElement('small');
  smallEl2.textContent = 'We Don\'t Spam';
  labelEl2.append(smallEl2);
  divEl20.append(labelEl2);

  const spanEl3 = document.createElement('span');
  spanEl3.setAttribute('class', 'input-group-text');
  spanEl3.textContent = '+91';
  divEl20.append(spanEl3);

  const inputEl2 = document.createElement('input');
  inputEl2.setAttribute('class', 'form-control');
  inputEl2.setAttribute('autocomplete', 'on');
  inputEl2.setAttribute('required', '');
  inputEl2.setAttribute('inputmode', 'numeric');
  inputEl2.setAttribute('type', 'text');
  inputEl2.setAttribute('placeholder', 'XXXXXXXXXX');
  inputEl2.setAttribute('maxlength', '10');
  inputEl2.setAttribute('id', '2');
  divEl20.append(inputEl2);
  divEl19.append(divEl20);

  const pEl3 = document.createElement('p');
  pEl3.setAttribute('class', 'input-error-msg');
  pEl3.textContent = 'Please enter valid phone number';
  divEl19.append(pEl3);
  agn_inputEl2.append(divEl19);
  divEl18.append(agn_inputEl2);
  divEl17.append(divEl18);
  divEl13.append(divEl17);

  const divEl21 = document.createElement('div');
  divEl21.setAttribute('class', 'flex-column col-lg-6 padding-right-0');

  const divEl22 = document.createElement('div');
  divEl22.setAttribute('class', 'form-group');

  const agn_inputEl3 = document.createElement('agn-input');
  agn_inputEl3.setAttribute('inputmode', 'numeric');
  agn_inputEl3.setAttribute('input-place-holder', 'Eg. ₹ 1,00,000');
  agn_inputEl3.setAttribute('class', 'hydrated');
  agn_inputEl3.setAttribute('value', '₹9,000');

  const divEl23 = document.createElement('div');
  divEl23.setAttribute('class', 'agn-input-container');

  const labelEl3 = document.createElement('label');
  labelEl3.textContent = 'Amount';
  divEl23.append(labelEl3);

  const inputEl3 = document.createElement('input');
  inputEl3.setAttribute('class', 'form-control');
  inputEl3.setAttribute('autocomplete', 'on');
  inputEl3.setAttribute('required', '');
  inputEl3.setAttribute('inputmode', 'numeric');
  inputEl3.setAttribute('type', 'textfield');
  inputEl3.setAttribute('placeholder', 'Eg. ₹ 1,00,000');
  inputEl3.setAttribute('maxlength', '14');
  inputEl3.setAttribute('id', '3');
  divEl23.append(inputEl3);

  const pEl4 = document.createElement('p');
  pEl4.setAttribute('class', 'input-error-msg');
  divEl23.append(pEl4);
  agn_inputEl3.append(divEl23);
  divEl22.append(agn_inputEl3);
  divEl21.append(divEl22);
  divEl13.append(divEl21);

  const divEl24 = document.createElement('div');
  divEl24.setAttribute('class', 'flex-column col-lg-6 padding-right-0');

  const divEl25 = document.createElement('div');
  divEl25.setAttribute('class', 'form-group select-group');

  const divEl26 = document.createElement('div');
  divEl26.setAttribute('class', 'agn-input-container');

  const labelEl4 = document.createElement('label');
  labelEl4.textContent = 'Frequency';
  divEl26.append(labelEl4);

  const selectEl = document.createElement('select');
  selectEl.setAttribute('name', 'icanpay');
  selectEl.setAttribute('class', 'form-control pt-2 pb-2');

  const optionEl = document.createElement('option');
  optionEl.setAttribute('value', 'YEARLY');
  optionEl.textContent = 'Yearly';
  selectEl.append(optionEl);

  const optionEl2 = document.createElement('option');
  optionEl2.setAttribute('value', 'HALF_YEARLY');
  optionEl2.textContent = 'Half Yearly';
  selectEl.append(optionEl2);

  const optionEl3 = document.createElement('option');
  optionEl3.setAttribute('value', 'QUARTERLY');
  optionEl3.textContent = 'Quarterly';
  selectEl.append(optionEl3);

  const optionEl4 = document.createElement('option');
  optionEl4.setAttribute('value', 'MONTHLY');
  optionEl4.textContent = 'Monthly';
  selectEl.append(optionEl4);
  divEl26.append(selectEl);

  const divEl27 = document.createElement('div');
  divEl27.setAttribute('class', 'is-flex is-align-items-center mt-1');

  const agn_imageEl = document.createElement('agn-image');
  agn_imageEl.setAttribute('class', 'mr-1 hydrated');

  const imgEl3 = document.createElement('img');
  imgEl3.setAttribute('src', '/assets/images/icons/Artboard_1.svg');
  imgEl3.setAttribute('alt', 'img');
  imgEl3.setAttribute('loading', 'lazy');
  agn_imageEl.append(imgEl3);
  divEl27.append(agn_imageEl);

  const spanEl4 = document.createElement('span');
  spanEl4.setAttribute('class', 'form-text');
  spanEl4.setAttribute('style', 'font-family: Manrope-semibold; color: rgb(74, 136, 245);');
  spanEl4.textContent = 'Monthly payment available!';
  divEl27.append(spanEl4);
  divEl26.append(divEl27);
  divEl25.append(divEl26);
  divEl24.append(divEl25);
  divEl13.append(divEl24);
  divEl12.append(divEl13);

  const divEl28 = document.createElement('div');
  divEl28.setAttribute('class', 'flex-row footer-text px-2 mb-0');

  const divEl29 = document.createElement('div');
  divEl29.setAttribute('class', 'checkbox');

  const inputEl4 = document.createElement('input');
  inputEl4.setAttribute('type', 'checkbox');
  inputEl4.setAttribute('id', 'is-checked');
  inputEl4.setAttribute('name', 'is_checked');
  inputEl4.setAttribute('value', 'checked');
  divEl29.append(inputEl4);
  divEl28.append(divEl29);

  const divEl30 = document.createElement('div');
  divEl30.setAttribute('class', 'checkbox-text');

  const pEl5 = document.createElement('p');
  pEl5.setAttribute('class', 'ml-1 without-Space mb-0');

  const aEl4 = document.createElement('a');
  aEl4.setAttribute('class', 'color-blue');
  aEl4.setAttribute('href', '/find-your-plan');
  aEl4.setAttribute('target', '_blank');
  aEl4.textContent = 'suitability analysis';
  pEl5.append(aEl4);
  divEl30.append(pEl5);
  divEl28.append(divEl30);
  divEl12.append(divEl28);

  const divEl31 = document.createElement('div');
  divEl31.setAttribute('class', 'flex-row footer-text px-2 mb-0 align-items-center');

  const divEl32 = document.createElement('div');
  divEl32.setAttribute('class', 'checkbox');

  const inputEl5 = document.createElement('input');
  inputEl5.setAttribute('type', 'checkbox');
  inputEl5.setAttribute('id', 'is-checked-ex');
  inputEl5.setAttribute('name', 'is_checked_ex');
  inputEl5.setAttribute('value', 'checked');
  divEl32.append(inputEl5);
  divEl31.append(divEl32);

  const divEl33 = document.createElement('div');
  divEl33.setAttribute('class', 'checkbox-text');

  const pEl6 = document.createElement('p');
  pEl6.setAttribute('class', 'ml-1 without-Space mb-0');
  pEl6.textContent = 'I explicitly consent to Bandhan Life contacting me via Call, SMS, Email, or WhatsApp for assistance. .';
  divEl33.append(pEl6);
  divEl31.append(divEl33);
  divEl12.append(divEl31);
  divEl11.append(divEl12);
  divEl10.append(divEl11);
  divEl9.append(divEl10);

  const divEl34 = document.createElement('div');
  divEl34.setAttribute('class', 'banner-buttons');

  const agn_buttonEl = document.createElement('agn-button');
  agn_buttonEl.setAttribute('class', 'hydrated');

  const buttonEl = document.createElement('button');
  buttonEl.setAttribute('type', 'submit');
  buttonEl.setAttribute('class', 'agn-primary-button');
  buttonEl.setAttribute('data-aegon-analytics-name', 'common | banner_know_more | {"eventLabel": "Bandhan Life iInvest Advantage","eventAction": "banner_know_more_undefined"}');

  const spanEl5 = document.createElement('span');
  spanEl5.setAttribute('data-aegon-analytics-name', 'common | banner_know_more | {"eventLabel": "Bandhan Life iInvest Advantage","eventAction": "banner_know_more_undefined"}');
  spanEl5.setAttribute('class', 'agn-primary-button-title has-text-centered');
  spanEl5.textContent = 'See My Returns';
  buttonEl.append(spanEl5);
  agn_buttonEl.append(buttonEl);
  divEl34.append(agn_buttonEl);
  divEl9.append(divEl34);
  divEl7.append(divEl9);
  divEl6.append(divEl7);
  divEl5.append(divEl6);

  const divEl35 = document.createElement('div');
  divEl35.setAttribute('class', 'step-2 text-center d-none');

  const divEl36 = document.createElement('div');
  divEl36.setAttribute('class', 'header mb-4 pb-4');

  const agn_anchor_tagEl = document.createElement('agn-anchor-tag');
  agn_anchor_tagEl.setAttribute('class', 'btn-back hydrated');

  const aEl5 = document.createElement('a');
  aEl5.setAttribute('class', 'default-cursor');
  aEl5.setAttribute('target', '_self');

  const agn_imageEl2 = document.createElement('agn-image');
  agn_imageEl2.setAttribute('class', 'icon mr-1 hydrated');

  const imgEl4 = document.createElement('img');
  imgEl4.setAttribute('src', '/assets/images/icons/back-button.svg');
  imgEl4.setAttribute('alt', 'img');
  agn_imageEl2.append(imgEl4);
  aEl5.append(agn_imageEl2);
  agn_anchor_tagEl.append(aEl5);
  divEl36.append(agn_anchor_tagEl);

  const pEl7 = document.createElement('p');
  pEl7.setAttribute('class', '');
  pEl7.textContent = 'Tell us about your occupation (Choose One)';
  divEl36.append(pEl7);
  divEl35.append(divEl36);

  const divEl37 = document.createElement('div');
  divEl37.setAttribute('class', 'mb-2');

  const ulEl2 = document.createElement('ul');
  ulEl2.setAttribute('class', 'list-chips select-occupation');

  const liEl4 = document.createElement('li');
  liEl4.setAttribute('class', '');

  const spanEl6 = document.createElement('span');
  spanEl6.textContent = 'Salaried';
  liEl4.append(spanEl6);
  ulEl2.append(liEl4);

  const liEl5 = document.createElement('li');
  liEl5.setAttribute('class', '');

  const spanEl7 = document.createElement('span');
  spanEl7.textContent = 'Armed forces / Police';
  liEl5.append(spanEl7);
  ulEl2.append(liEl5);

  const liEl6 = document.createElement('li');
  liEl6.setAttribute('class', '');

  const spanEl8 = document.createElement('span');
  spanEl8.textContent = 'Agriculturist';
  liEl6.append(spanEl8);
  ulEl2.append(liEl6);

  const liEl7 = document.createElement('li');
  liEl7.setAttribute('class', '');

  const spanEl9 = document.createElement('span');
  spanEl9.textContent = 'Student';
  liEl7.append(spanEl9);
  ulEl2.append(liEl7);

  const liEl8 = document.createElement('li');
  liEl8.setAttribute('class', '');

  const spanEl10 = document.createElement('span');
  spanEl10.textContent = 'Worker/labour';
  liEl8.append(spanEl10);
  ulEl2.append(liEl8);

  const liEl9 = document.createElement('li');
  liEl9.setAttribute('class', '');

  const spanEl11 = document.createElement('span');
  spanEl11.textContent = 'Retired /Pensioners';
  liEl9.append(spanEl11);
  ulEl2.append(liEl9);

  const liEl10 = document.createElement('li');
  liEl10.setAttribute('class', '');

  const spanEl12 = document.createElement('span');
  spanEl12.textContent = 'Self-employed (Professional)';
  liEl10.append(spanEl12);
  ulEl2.append(liEl10);

  const liEl11 = document.createElement('li');
  liEl11.setAttribute('class', '');

  const spanEl13 = document.createElement('span');
  spanEl13.textContent = 'Self-employed (Business)';
  liEl11.append(spanEl13);
  ulEl2.append(liEl11);
  divEl37.append(ulEl2);
  divEl35.append(divEl37);

  const divEl38 = document.createElement('div');
  divEl38.setAttribute('class', 'banner-buttons');

  const agn_anchor_tagEl2 = document.createElement('agn-anchor-tag');
  agn_anchor_tagEl2.setAttribute('class', 'hydrated');

  const aEl6 = document.createElement('a');
  aEl6.setAttribute('class', 'default-cursor');
  aEl6.setAttribute('target', '_self');

  const agn_buttonEl2 = document.createElement('agn-button');
  agn_buttonEl2.setAttribute('class', 'hydrated');

  const buttonEl2 = document.createElement('button');
  buttonEl2.setAttribute('type', 'button');
  buttonEl2.setAttribute('class', 'agn-primary-button');
  buttonEl2.setAttribute('data-aegon-analytics-name', 'common | banner_know_more | {"eventLabel": "Bandhan Life iInvest Advantage","eventAction": "banner_know_more_undefined"}');

  const spanEl14 = document.createElement('span');
  spanEl14.setAttribute('data-aegon-analytics-name', 'common | banner_know_more | {"eventLabel": "Bandhan Life iInvest Advantage","eventAction": "banner_know_more_undefined"}');
  spanEl14.setAttribute('class', 'agn-primary-button-title has-text-centered');
  spanEl14.textContent = 'Next';
  buttonEl2.append(spanEl14);
  agn_buttonEl2.append(buttonEl2);
  aEl6.append(agn_buttonEl2);
  agn_anchor_tagEl2.append(aEl6);
  divEl38.append(agn_anchor_tagEl2);
  divEl35.append(divEl38);
  divEl5.append(divEl35);
  divEl4.append(divEl5);
  divEl3.append(divEl4);
  divEl2.append(divEl3);
  container.append(divEl2);


  block.textContent = '';
  block.append(container);
}

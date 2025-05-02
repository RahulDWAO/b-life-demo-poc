export default function decorate(block) {
  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  const aegonherosectionEl = document.createElement('aegon-hero-section');
  aegon-hero-sectionEl.setAttribute('class', 'agn-home-banner bandhan hydrated');
  aegon-hero-sectionEl.setAttribute('id', 'iTerm-comfort-buy-now');
  aegon-hero-sectionEl.setAttribute('host', 'https://www.bandhanlife.com');
  aegon-hero-sectionEl.setAttribute('selected-occupation', '');
  aegon-hero-sectionEl.setAttribute('selected-occupation-haz-ans', '');
  aegon-hero-sectionEl.setAttribute('selected-edu-qualification', '');

    const divEl = document.createElement('div');
    divEl.setAttribute('class', 'agn-home-banner__container itermprime-banner');

      const divEl2 = document.createElement('div');
      divEl2.setAttribute('class', 'banner-content');

        const introactionitemsEl = document.createElement('intro-action-items');
        intro-action-itemsEl.setAttribute('selected-occupation', '');
        intro-action-itemsEl.setAttribute('selected-occupation-haz-ans', '');
        intro-action-itemsEl.setAttribute('selected-edu-qualification', '');
        intro-action-itemsEl.setAttribute('class', 'hydrated');

          const sectionEl = document.createElement('section');

            const divEl3 = document.createElement('div');
            divEl3.setAttribute('class', 'action-items-containers grey-theme');

              const divEl4 = document.createElement('div');
              divEl4.setAttribute('class', 'age-cover-section');

                const aegonmultitabsEl = document.createElement('aegon-multi-tabs');
                aegonmultitabsEl.setAttribute('data-aegon-analytics-on-change', 'gender');
                aegonmultitabsEl.setAttribute('class', 'hydrated');

                  const divEl5 = document.createElement('div');
                  divEl5.setAttribute('class', 'multi-tabs-container');

                    const divEl6 = document.createElement('div');
                    divEl6.setAttribute('class', 'tab-head');
                  divEl5.append(divEl6);

                    const aegontabsEl = document.createElement('aegon-tabs');
                    aegontabsEl.setAttribute('class-names', 'is-toggle bandhan-tabs');
                    aegontabsEl.setAttribute('is-active', '');
                    aegontabsEl.setAttribute('class', 'hydrated');

                      const divEl7 = document.createElement('div');
                      divEl7.setAttribute('class', 'agn-tabs tabs is-toggle bandhan-tabs false');

                        const ulEl = document.createElement('ul');

                          const liEl = document.createElement('li');
                          liEl.setAttribute('id', 'Male');
                          liEl.setAttribute('class', 'bandhan-tabs');
                          liEl.setAttribute('data-target', 'Male');

                            const spanEl = document.createElement('span');
                            spanEl.textContent = 'Male';
                          liEl.append(spanEl);
                        ulEl.append(liEl);

                          const liEl2 = document.createElement('li');
                          liEl2.setAttribute('id', 'Female');
                          liEl2.setAttribute('class', 'bandhan-tabs');
                          liEl2.setAttribute('data-target', 'Female');

                            const spanEl2 = document.createElement('span');
                            spanEl2.textContent = 'Female';
                          liEl2.append(spanEl2);
                        ulEl.append(liEl2);

                          const liEl3 = document.createElement('li');
                          liEl3.setAttribute('id', 'Transgender');
                          liEl3.setAttribute('class', 'bandhan-tabs');
                          liEl3.setAttribute('data-target', 'Transgender');

                            const spanEl3 = document.createElement('span');
                            spanEl3.textContent = 'Others';
                          liEl3.append(spanEl3);
                        ulEl.append(liEl3);
                      divEl7.append(ulEl);
                    aegontabsEl.append(divEl7);
                  divEl5.append(aegon-tabsEl);
                aegonmultitabsEl.append(divEl5);
              divEl4.append(aegonmultitabsEl);

                const divEl8 = document.createElement('div');
                divEl8.setAttribute('class', 'input-containers');

                  const divEl9 = document.createElement('div');
                  divEl9.setAttribute('class', 'calendar-container');

                    const labelEl = document.createElement('label');
                    labelEl.textContent = 'Your age';
                  divEl9.append(labelEl);

                    const inputEl = document.createElement('input');
                    inputEl.setAttribute('id', 'age');
                    inputEl.setAttribute('class', 'input-coverage');
                    inputEl.setAttribute('required', '');
                    inputEl.setAttribute('type', 'text');
                    inputEl.setAttribute('inputmode', 'numeric');
                    inputEl.setAttribute('autocomplete', 'off');
                    inputEl.setAttribute('placeholder', 'Eg. 25 years');
                    inputEl.setAttribute('maxlength', '2');
                    inputEl.setAttribute('data-aegon-analytics-on-change', 'age');
                  divEl9.append(inputEl);
                divEl8.append(divEl9);

                  const divEl10 = document.createElement('div');
                  divEl10.setAttribute('class', 'life-cover-section');

                    const divEl11 = document.createElement('div');
                    divEl11.setAttribute('class', 'sum-assuared-container');

                      const labelEl2 = document.createElement('label');
                      labelEl2.textContent = 'Life cover amount';
                    divEl11.append(labelEl2);

                      const inputEl2 = document.createElement('input');
                      inputEl2.setAttribute('id', 'sumAssured');
                      inputEl2.setAttribute('class', 'input-coverage');
                      inputEl2.setAttribute('required', '');
                      inputEl2.setAttribute('type', 'text');
                      inputEl2.setAttribute('inputmode', 'numeric');
                      inputEl2.setAttribute('autocomplete', 'off');
                      inputEl2.setAttribute('placeholder', 'Eg. ₹ 1,00,00,000');
                      inputEl2.setAttribute('maxlength', '16');
                      inputEl2.setAttribute('data-aegon-analytics-on-change', 'sumAssured');
                    divEl11.append(inputEl2);
                  divEl10.append(divEl11);
                divEl8.append(divEl10);
              divEl4.append(divEl8);

                const divEl12 = document.createElement('div');
                divEl12.setAttribute('class', 'radio-container');
                divEl12.setAttribute('id', 'address-container');

                  const labelEl3 = document.createElement('label');
                  labelEl3.setAttribute('class', 'radio-question');
                  labelEl3.setAttribute('for', '');

                    const spanEl4 = document.createElement('span');
                    spanEl4.setAttribute('class', 'tobacco-information');

                      const aegontooltipEl = document.createElement('aegon-tooltip');
                      aegontooltipEl.setAttribute('class', 'hydrated');

                        const divEl13 = document.createElement('div');
                        divEl13.setAttribute('class', 'aegon-tooltip');

                          const imgEl = document.createElement('img');
                          imgEl.setAttribute('src', '/online-plans/img/info-icon.png');
                          imgEl.setAttribute('alt', 'Tobacco question');
                        divEl13.append(imgEl);
                      aegon-tooltipEl.append(divEl13);
                    spanEl4.append(aegontooltipEl);
                  labelEl3.append(spanEl4);
                divEl12.append(labelEl3);

                  const divEl14 = document.createElement('div');
                  divEl14.setAttribute('class', 'radios');

                    const inputEl3 = document.createElement('input');
                    inputEl3.setAttribute('class', 'smoke-radio');
                    inputEl3.setAttribute('data-aegon-analytics-on-change', 'smokerType');
                    inputEl3.setAttribute('type', 'radio');
                    inputEl3.setAttribute('id', 'yes');
                    inputEl3.setAttribute('name', 'smokeQ');
                    inputEl3.setAttribute('value', 'STANDARD');
                    inputEl3.setAttribute('required', '');
                  divEl14.append(inputEl3);

                    const labelEl4 = document.createElement('label');
                    labelEl4.setAttribute('class', 'smoke-label');
                    labelEl4.setAttribute('for', 'yes');
                    labelEl4.textContent = 'Yes';
                  divEl14.append(labelEl4);

                    const inputEl4 = document.createElement('input');
                    inputEl4.setAttribute('class', 'smoke-radio');
                    inputEl4.setAttribute('data-aegon-analytics-on-change', 'smokerType');
                    inputEl4.setAttribute('type', 'radio');
                    inputEl4.setAttribute('id', 'no');
                    inputEl4.setAttribute('name', 'smokeQ');
                    inputEl4.setAttribute('value', 'NON_SMOKER');
                    inputEl4.setAttribute('required', '');
                  divEl14.append(inputEl4);

                    const labelEl5 = document.createElement('label');
                    labelEl5.setAttribute('class', 'smoke-label');
                    labelEl5.setAttribute('for', 'no');
                    labelEl5.textContent = 'No';
                  divEl14.append(labelEl5);
                divEl12.append(divEl14);
              divEl4.append(divEl12);

                const divEl15 = document.createElement('div');
                divEl15.setAttribute('class', 'submit-btn-content');

                  const sectionEl2 = document.createElement('section');

                    const buttonEl = document.createElement('button');
                    buttonEl.setAttribute('type', 'button');
                    buttonEl.setAttribute('class', 'proceed-action-btn iterm-quote-btn');
                    buttonEl.setAttribute('data-aegon-analytics-on', 'click');
                    buttonEl.setAttribute('data-aegon-analytics-name', 'seeMyReturns');
                    buttonEl.textContent = 'Get quote';
                  sectionEl2.append(buttonEl);
                divEl15.append(sectionEl2);

                  const sectionEl3 = document.createElement('section');

                    const divEl16 = document.createElement('div');
                    divEl16.setAttribute('class', 'cover-text');
                    divEl16.textContent = 'Not sure how much cover you need?';
                  sectionEl3.append(divEl16);

                    const divEl17 = document.createElement('div');
                    divEl17.setAttribute('class', 'link-text');

                      const aEl = document.createElement('a');
                      aEl.setAttribute('href', 'https://www.bandhanlife.com/term-insurance-calculator');
                      aEl.setAttribute('target', '_blank');
                      aEl.setAttribute('data-aegon-analytics-on', 'click');
                      aEl.setAttribute('data-aegon-analytics-name', 'chooseRightCover');
                      aEl.textContent = 'Help me choose the right cover';
                    divEl17.append(aEl);
                  sectionEl3.append(divEl17);
                divEl15.append(sectionEl3);
              divEl4.append(divEl15);
            divEl3.append(divEl4);
          sectionEl.append(divEl3);
        intro-action-itemsEl.append(sectionEl);
      divEl2.append(introactionitemsEl);
    divEl.append(divEl2);

      const divEl18 = document.createElement('div');
      divEl18.setAttribute('class', '');

        const agnpictureEl = document.createElement('agn-picture');
        agnpictureEl.setAttribute('class', '');

          const divEl19 = document.createElement('div');

            const divEl20 = document.createElement('div');
            divEl20.setAttribute('class', 'strip strip-1');

              const divEl21 = document.createElement('div');
              divEl21.setAttribute('class', 'icon-block');

                const imgEl2 = document.createElement('img');
                imgEl2.setAttribute('src', 'https://www.bandhanlife.com/staticassets/2024-03/Up%20to%2010%20per%20Discount%20on%20Online%20Purchase.svg');
                imgEl2.setAttribute('class', 'strip-img');
                imgEl2.setAttribute('alt', 'img');
                imgEl2.setAttribute('loading', 'lazy');
              divEl21.append(imgEl2);
            divEl20.append(divEl21);

              const divEl22 = document.createElement('div');
              divEl22.setAttribute('class', 'strip-txt');

                const supEl = document.createElement('sup');
                supEl.textContent = '+';
              divEl22.append(supEl);
            divEl20.append(divEl22);
          divEl19.append(divEl20);

            const divEl23 = document.createElement('div');
            divEl23.setAttribute('class', 'strip strip-2');

              const divEl24 = document.createElement('div');
              divEl24.setAttribute('class', 'icon-block');

                const imgEl3 = document.createElement('img');
                imgEl3.setAttribute('src', 'https://www.bandhanlife.com/staticassets/2024-03/Smooth%20Digital%20Process%20With%20Zero%20Documentation.svg');
                imgEl3.setAttribute('class', 'strip-img');
                imgEl3.setAttribute('alt', 'img');
                imgEl3.setAttribute('loading', 'lazy');
              divEl24.append(imgEl3);
            divEl23.append(divEl24);

              const divEl25 = document.createElement('div');
              divEl25.setAttribute('class', 'strip-txt');

                const supEl2 = document.createElement('sup');
                supEl2.textContent = '#';
              divEl25.append(supEl2);
            divEl23.append(divEl25);
          divEl19.append(divEl23);

            const divEl26 = document.createElement('div');
            divEl26.setAttribute('class', 'strip strip-3');

              const divEl27 = document.createElement('div');
              divEl27.setAttribute('class', 'icon-block');

                const imgEl4 = document.createElement('img');
                imgEl4.setAttribute('src', 'https://www.bandhanlife.com/staticassets/2024-03/GetAllYourPremiumsBack.svg');
                imgEl4.setAttribute('class', 'strip-img');
                imgEl4.setAttribute('alt', 'img');
                imgEl4.setAttribute('loading', 'lazy');
              divEl27.append(imgEl4);
            divEl26.append(divEl27);

              const divEl28 = document.createElement('div');
              divEl28.setAttribute('class', 'strip-txt');

                const supEl3 = document.createElement('sup');
                supEl3.textContent = '&';
              divEl28.append(supEl3);
            divEl26.append(divEl28);
          divEl19.append(divEl26);
        agnpictureEl.append(divEl19);

          const pictureEl = document.createElement('picture');

            const sourceEl = document.createElement('source');
            sourceEl.setAttribute('media', '(max-width:768px)');
            sourceEl.setAttribute('srcset', '/online-plans/img/iterm-prime/iprime-hero-banner.webp');
          pictureEl.append(sourceEl);

            const sourceEl2 = document.createElement('source');
            sourceEl2.setAttribute('media', '(min-width:768px)');
            sourceEl2.setAttribute('srcset', '/online-plans/img/iterm-prime/iprime-hero-banner.webp');
          pictureEl.append(sourceEl2);

            const imgEl5 = document.createElement('img');
            imgEl5.setAttribute('src', '/online-plans/img/iterm-prime/iprime-hero-banner.webp');
            imgEl5.setAttribute('alt', 'img');
            imgEl5.setAttribute('height', '1278');
            imgEl5.setAttribute('width', '1093');
            imgEl5.setAttribute('loading', 'eager');
          pictureEl.append(imgEl5);
        agnpictureEl.append(pictureEl);
      divEl18.append(agn-pictureEl);
    divEl.append(divEl18);
  aegonherosectionEl.append(divEl);
  container.append(aegon-hero-sectionEl);


  block.textContent = '';
  block.append(container);
}
// Не показывать кнопки аккордеона без JS.
//(Кнопки включаться тока если загрузится JS)

import {data} from 'autoprefixer';

const accordeonButton = document.querySelectorAll('.footer__button');
accordeonButton.forEach((element) => {
  element.setAttribute('data-js', 'show-button');
});
//

const accordeonToggle = function () {
  // Свернуть списки аккордеонов
  const accordeonSection = document.querySelectorAll('.footer-accordeon');
  const accordeonList = document.querySelectorAll('.footer-accordeon-list');

  accordeonSection.forEach((element) => {
    element.setAttribute('data-js', '');
  });

  //Функция для тогла аккордеонов
  accordeonSection.forEach((section) => {
    section.addEventListener('click', (event) => {
      accordeonButton.forEach((element) => {
        const currentElement = element.closest('section');
        if (element === event.target) {
          if (currentElement.hasAttribute('data-js')) {
            accordeonSection.forEach(accordeonToggle);
            currentElement.removeAttribute('data-js');
          } else {
            currentElement.setAttribute('data-js','');
          }
        }
      });
    });
  });
};
//
export {accordeonToggle};

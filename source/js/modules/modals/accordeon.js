// Не показывать кнопки аккордеона без JS.
//(Кнопки включаться тока если загрузится JS)

import {data} from 'autoprefixer';

const accordeonSection = document.querySelectorAll('[data-accordeon-section]');
const accordeonList = document.querySelectorAll('[data-accordeon-list]');
const accordeonButton = document.querySelectorAll('[data-accordeon-button]');
accordeonButton.forEach((element) => {
  element.classList.add('shows-button');
});
//
// Свернуть списки аккордеонов
const accordeonToggle = function () {
  accordeonList.forEach((element) => {
    element.classList.add('is-hidden-list');
  });

// Тоглл для аккордеонов
  accordeonSection.forEach((section) => {
    section.addEventListener('click', (event) => {
      accordeonButton.forEach((element) => {
        const currentElement = element.closest('section');
        const childList = currentElement.querySelector('ul');
        if (element === event.target) {
          accordeonList.forEach((item) => {
            item.classList.add('is-hidden-list');
          });
          childList.classList.remove('is-hidden-list');
        }
      });
    });
  });
};
//
export {accordeonToggle};

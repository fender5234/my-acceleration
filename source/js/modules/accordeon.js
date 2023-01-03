// const accordeonSections = document.querySelectorAll('[data-accordeon-section]');
// const accordeonLists = document.querySelectorAll('[data-accordeon-list]');
// const accordeonButtons = document.querySelectorAll('[data-accordeon-button]');

// import {list} from 'postcss';

// // Инициализация логики работы аккордеонов
// const initAccordeons = function () {
//   // Не показывать кнопки аккордеонов без JS.
//   // (Кнопки включатся тока если загрузится JS)
//   accordeonButtons.forEach((element) => {
//     element.classList.add('shows-button');
//   });

//   // Не сворачивать списки аккордеонов без JS.
//   // (Списки свернутся тока если загрузится JS)
//   accordeonLists.forEach((element) => {
//     element.classList.add('is-hidden-list');
//   });

//   // Обработка клика по секциям
//   accordeonSections.forEach((section) => {
//     section.addEventListener('click', (event) => {
//       const currentButton = event.target.closest('[data-accordeon-button]');

//       // Не обрабатываем клик, если он совершен не по кнопке или не внутри неё
//       if (!currentButton) {
//         return;
//       }

//       accordeonSections.forEach((section) => {
//         const childList = section.querySelector('[data-accordeon-list]');
//         const childButton = section.querySelector('[data-accordeon-button]');

//         if (childButton !== currentButton || childButton.classList.contains('is-active')) {
//           // Если это не текущий аккордеон или если это открытый текущий аккордеон, то закарываем его
//           childList.classList.add('is-hidden-list');
//           childButton.classList.remove('is-active');
//         } else {
//           // А если это текущий закрытый аккордеон, то открываем его
//           childList.classList.remove('is-hidden-list');
//           childButton.classList.add('is-active');
//         }

//         // Переключаем тексты кнопок
//         childButton.querySelectorAll('[data-button-text]').forEach((buttonTextElement) => {
//           buttonTextElement.hidden = !buttonTextElement.hidden;
//         });
//       });
//     });
//   });
// };

// export {initAccordeons};

const accordeonSections = document.querySelectorAll('[data-accordeon-section]');
const accordeonLists = document.querySelectorAll('[data-accordeon-list]');
const accordeonButtons = document.querySelectorAll('[data-accordeon-button]');

// Инициализация логики работы аккордеонов
const initAccordeons = function () {
  // Не показывать кнопки аккордеонов без JS.
  // (Кнопки включатся тока если загрузится JS)
  accordeonButtons.forEach((element) => {
    element.classList.add('shows-button');
  });

  // Не сворачивать списки аккордеонов без JS.
  // (Списки свернутся тока если загрузится JS)
  accordeonLists.forEach((element) => {
    element.classList.add('is-hidden-list');
  });

  // Обработка клика по секциям
  accordeonSections.forEach((section) => {
    section.addEventListener('click', () => {
      const currentSection = section;
      const currentList = currentSection.querySelector('[data-accordeon-list]');
      const currentButton = currentSection.querySelector('[data-accordeon-button]');

      if (currentList.classList.contains('is-hidden-list')) {
        accordeonLists.forEach((list) => {
          list.classList.add('is-hidden-list');
        });
        currentList.classList.remove('is-hidden-list');
      } else {
        currentList.classList.add('is-hidden-list');
      }

      if (currentList.classList.contains('is-hidden-list')) {
        currentButton.classList.remove('is-active');
      } else {
        accordeonButtons.forEach((element) => {
          element.classList.remove('is-active');
        });
        currentButton.classList.add('is-active');
      }
    });
  });
};

export {initAccordeons};

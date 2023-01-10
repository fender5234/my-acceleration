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
      const currentList = section.querySelector('[data-accordeon-list]');
      const currentButton = section.querySelector('[data-accordeon-button]');

      currentList.classList.toggle('is-hidden-list');
      currentButton.classList.toggle('is-active');
      if (!currentList.classList.contains('is-hidden-list') & currentButton.classList.contains('is-active')) {
        accordeonLists.forEach((lists) => {
          lists.classList.add('is-hidden-list');
          currentList.classList.remove('is-hidden-list');
        });

        accordeonButtons.forEach((buttons) => {
          buttons.classList.remove('is-active');
          currentButton.classList.add('is-active');
        });
      }
    });
  });
};

export {initAccordeons};

// Не показывать кнопки аккордеона без JS.
//(Кнопки включаться тока если загрузится JS)

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
        const buttons = element;
        buttons.classList.remove('is-active');
        if (element === event.target) {
          const currentElement = element.closest('section');
          const childList = currentElement.querySelector('ul');
          const currentButton = element;
          console.log(currentButton);
          // тут внизу форыч скрывает добавляет класс скрывания списков всех сразу
          accordeonList.forEach((item) => {
            item.classList.add('is-hidden-list');
          });
          // а тут нужный список который выше был добавлен в переменную открываеться
          childList.classList.remove('is-hidden-list');
          currentButton.classList.add('is-active');
        }
      });
    });
  });
};
//
export {accordeonToggle};

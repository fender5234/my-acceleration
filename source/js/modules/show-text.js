const showText = function (section) {
  const textBlock = section.querySelector('[data-text]');
  const togglerButton = section.querySelector('[data-button]');
  const textExpand = section.querySelector('[data-expand]');
  const textHide = section.querySelector('[data-hidden]');

  togglerButton.classList.add('description__button--js');
  textBlock.classList.add('is-hide-text');
  textExpand.classList.remove('js');

  section.addEventListener('click', (event) => {
    if (togglerButton === event.target.closest('[data-button]')) {
      textBlock.classList.toggle('is-hide-text');
      textExpand.classList.toggle('js');
      textHide.classList.toggle('js');
    }
  });
};

export {showText};

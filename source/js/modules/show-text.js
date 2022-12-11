const showText = function (section) {
  const textBlock = section.querySelector('[data-text]');
  const togglerButton = section.querySelector('[data-button]');
  textBlock.classList.add('is-hide-text');

  section.addEventListener('click', (event) => {
    if (togglerButton === event.target) {
      textBlock.classList.toggle('is-hide-text');
    }
  });
};

export {showText};

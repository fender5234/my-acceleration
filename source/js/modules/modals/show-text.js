const showText = function () {
  const Textsection = document.querySelector('[data-description]');
  const togglerButton = section.querySelector('[data-button]');
  const textBlock = section.querySelector('[data-text]');
  textBlock.classList.add('is-hide-text');

  Textsection.addEventListener('click', (event) => {
    if (togglerButton === event.target) {
      textBlock.classList.toggle('is-hide-text');
    }
  });
};

export {showText};

export {show};

const show = function () {
  const showButton = document.querySelector('.show-text-button');
  const hideText = document.querySelector('.hide-text');
  hideText.setAttribute('data-nojs', 'show-text');

  showButton.addEventListener('click', () => {
    if (hideText.hasAttribute('data-nojs')) {
      hideText.removeAttribute('data-nojs');
    } else {
      hideText.setAttribute('data-nojs', 'show-text');
    }
  });
};

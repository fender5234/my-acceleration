const show = function () {
  const showButton = document.querySelector('.show-text-button');
  const hideText = document.querySelector('.hide-text');
  hideText.setAttribute('data-js', 'hide-text');

  showButton.addEventListener('click', () => {
    if (hideText.hasAttribute('data-js')) {
      hideText.removeAttribute('data-js');
    } else {
      hideText.setAttribute('data-js', 'hide-text');
    }
  });
};

export {show};

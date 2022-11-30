import html from '../utils/html';

const ButtonText = {
  CLOSED: 'Подробнее',
  OPENED: 'Свернуть',
};
const VISIBLE_PARAGRAPHS_COUNT = 2;
const INNER_SELECTOR = '.content-section__inner';
const BODY_SELECTOR = '.content-section__body';
const BTN_SELECTOR = '.content-section__btn';
const CLOSED_CLASS_NAME = 'content-section__body--closed';
const CLOSABLE_CLASS_NAME = 'content-section__inner--closable';
const PARAGRAPHS_SELECTOR = '.content-section__body > p';

const buttonTemplate = html`<button class="content-section__btn btn">
  ${ButtonText.CLOSED}
</button>`;

export default (sectionElement) => {
  let isOpened = false;

  const innerElement = sectionElement.querySelector(INNER_SELECTOR);
  const bodyElement = innerElement.querySelector(BODY_SELECTOR);
  const contentParagraphElements =
    bodyElement.querySelectorAll(PARAGRAPHS_SELECTOR);

  if (contentParagraphElements.length > VISIBLE_PARAGRAPHS_COUNT) {
    innerElement.classList.add(CLOSABLE_CLASS_NAME);
    bodyElement.classList.add(CLOSED_CLASS_NAME);
    bodyElement.insertAdjacentHTML('beforeend', buttonTemplate);

    const buttonElement = bodyElement.querySelector(BTN_SELECTOR);
    buttonElement.addEventListener('click', () => {
      isOpened = !isOpened;
      bodyElement.classList.toggle(CLOSED_CLASS_NAME);

      buttonElement.textContent = isOpened
        ? ButtonText.OPENED
        : ButtonText.CLOSED;
    });
  }
};

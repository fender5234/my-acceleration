export default (formElement, id = 0) => {
  const fieldElements = formElement.querySelectorAll('[name]');
  let storageSupported = false;

  fieldElements.forEach((fieldElement) => {
    const {
      dataset: {mask},
      name,
      type,
    } = fieldElement;

    if (type === 'password') {
      return;
    }

    const fieldId = `form-${id}-${name}`;

    try {
      const value = localStorage.getItem(fieldId);
      storageSupported = true;

      if (value !== null) {
        fieldElement.value = value;
      }
    } catch (error) {
      // Do nothing
    }

    if (mask) {
      window.Maska.create(fieldElement, {mask});
    }

    fieldElement.addEventListener('change', () => {
      if (fieldElement.checkValidity()) {
        if (storageSupported) {
          localStorage.setItem(fieldId, fieldElement.value);
        }
      } else {
        fieldElement.reportValidity();
      }
    });
  });
};

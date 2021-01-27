
export const composeValidators = (...validators) => {
  return value => {
    return validators.reduce((error, validator) => {
      return error || validator(value)
    }, undefined);
  }
}

export const maxLength = (max) => (value) => {
  if (value && value.length > max) {
    return `Максимальное колличество ${max} символа`;
  } else {
    return undefined;
  }
}
//value.touched
export const required = (value) => {
  if (!value) {
    return 'Поле должно быть заполнено';
  } else {
    return undefined;
  }
}

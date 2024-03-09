import { validate } from "validate.js";

export const validateString = (id, value) => {
    const constraints = {
        presence: { allowEmpty: false }
    };

    if (value !== "") {
      constraints.format = {
          pattern: "[a-z]+",
          flags: "i",
          message: "value can only contain letters"
      }
    }

    return validate({ [id]: value }, { [id]: constraints });
}

export const validateEmail = (id, value) => {
    const constraints = {
        presence: { allowEmpty: false }
    };

    if (value !== "") {
      constraints.email = true
    }

    return validate({ [id]: value }, { [id]: constraints });
}

export const validatePassword = (id, value) => {
  const constraints = {
      presence: { allowEmpty: false }
  };

  if (value !== "") {
    constraints.length = {
      minimum: 8,
      message: 'password must be at least 8 characters in length'
    }
  }

  return validate({ [id]: value }, { [id]: constraints });
}
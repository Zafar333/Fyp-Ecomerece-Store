export const isEmpty = (obj) => {
  let ch = Object.keys(obj);

  if (ch.length > 0) {
    for (let i = 0; i < ch.length; i++) {
      if (obj[ch[i]] || /\s/.test(obj[ch[i]])) {
        if (i == ch.length - 1) {
          return true;
        }
        continue;
      } else {
        return false;
      }
    }
    return false;
  }
  return false;
};

export const checkLength = (value, len) => {
  if (value.length >= len) {
    return true;
  } else {
    return false;
  }
};

export const EmailValidator = (email) => {
  const emailRegex = /^[a-z][a-zA-Z0-9._-]*@[a-z0-9.-]+\.[a-z]{2,4}$/;
  if (emailRegex.test(email)) {
    return true;
  } else {
    return false;
  }
};

export const PasswordValidator = (password) => {
  let pass = String(password);
  if (pass.length > 8) {
    return true;
  } else {
    return false;
  }
};

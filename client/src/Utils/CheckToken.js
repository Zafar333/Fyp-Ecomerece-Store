export const CheckToken = (type) => {
  if (type) {
    let token = localStorage.getItem(type);
    if (!token || token === "undefined") {
      return false;
    } else {
      return true;
    }
  }
};

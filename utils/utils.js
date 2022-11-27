export const preventingDefault = (callback) => {
  return (event) => {
    event.preventDefault();
    callback();
    return false;
  };
};

export const defer = (callback) => {
  setTimeout(callback, 0);
};

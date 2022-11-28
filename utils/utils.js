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

export const range = (start, end) => {
  return Array(end - start)
    .fill(1)
    .map((x, y) => start + x + y);
};

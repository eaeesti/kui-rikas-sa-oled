export const preventingDefault = (callback) => {
  return (event) => {
    event.preventDefault();
    callback();
    return false;
  };
};

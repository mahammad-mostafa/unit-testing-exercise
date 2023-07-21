module.exports = (string) => {
  if (string.length > 0 && string.length < 11) {
    return string.length;
  }
  throw new Error('Value out of range!');
};
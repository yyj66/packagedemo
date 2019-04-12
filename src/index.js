module.exports = function replaceSpace(string) {
    if (typeof string !== "string") throw new TypeError("package wants a string!");
    return string.replace(/\s/g, "-");
  };
  
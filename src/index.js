module.exports = function check(str, bracketsConfig) {
  let opening = [];
  let closing = [];
  let bracketMap = {};
  for (let [open, close] of bracketsConfig) {
    opening.push(open);
    closing.push(close);
    bracketMap[close] = open;
  }

  let stack = [];
  for (let bracket of str) {
    if (opening.includes(bracket) && !closing.includes(bracket)) {
      stack.push(bracket);
    } else if (opening.includes(bracket) && closing.includes(bracket)) {
      if (stack[stack.length - 1] === bracket) stack.pop();
      else stack.push(bracket);
    } else if (stack.length === 0 || stack.pop() !== bracketMap[bracket]) {
      return false;
    }
  }
  return stack.length === 0;
};

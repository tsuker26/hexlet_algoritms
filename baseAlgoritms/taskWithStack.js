//Реализуйте функцию, которая принимает две строки и возвращает true если
//они равны.
//Символ решетки # в строке должен интерпретироваться как backspace.

class Stack {
  items = [];

  push(value) {
    this.items.push(value);
  }

  pop() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length == 0;
  }

  convertString() {
    return this.items.join("");
  }
}

const convertString = (str) => {
  let stack = new Stack();
  let lexems = str.split("");
  for (let lexem of lexems) {
    if (lexem === "#") {
      stack.pop();
    } else {
      stack.push(lexem);
    }
  }

  return stack.convertString();
};

const solution = (str1, str2) => {
  if (str1 === str2) return true;

  return convertString(str1) === convertString(str2);
};

console.log(solution("ab#c", "ab#c")); //true
console.log(solution("ab##", "c#d#")); //true
console.log(solution("a#c", "b"));

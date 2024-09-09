//Реализуйте функцию, которая принимает две строки и возвращает true если
//они равны.
//Символ решетки # в строке должен интерпретироваться как backspace.

const convertString = (str) => {
  let stack = [];
  let lexems = str.split("");
  for (let lexem of lexems) {
    if (lexem === "#") {
      stack.pop();
    } else {
      stack.push(lexem);
    }
  }

  return stack.join("");
};

const solution = (str1, str2) => {
  if (str1 === str2) return true;

  return convertString(str1) === convertString(str2);
};

console.log(solution("ab#c", "ab#c")); //true
console.log(solution("ab##", "c#d#")); //true
console.log(solution("a#c", "b"));

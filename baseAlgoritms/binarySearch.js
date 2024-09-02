const stopWords = [
  "а",
  "без",
  "ближе",
  "браво",
  "бы",
  "вам",
  "вас",
  "весь",
  "во",
  "все",
  "всего",
  "вы",
];

const isStopWord = (candidate) => {
  let first = 0;
  let last = stopWords.length - 1;

  while (first <= last) {
    let middle = Math.floor((first + last) / 2);

    if (stopWords[middle] === candidate) {
      return true;
    }

    if (stopWords[middle] < candidate) {
      last = middle - 1;
    }

    if (stopWords[middle] > candidate) {
      first = middle + 1;
    }
  }
  return false;
};

console.log(isStopWord("вам"));
console.log(isStopWord("вам1"));

const phonebook = [
  { name: "Alex Bowman", number: "48-2002" },
  { name: "Aric Almirola", number: "10-1001" },
  { name: "Bubba Wallace", number: "23-1111" },
];

function solution(phonebook, name) {
  if (!phonebook.length) return "Phonebook is empty!";

  let first = 0;
  let last = phonebook.length - 1;

  while (first <= last) {
    let middle = Math.floor((first + last) / 2);
    if (phonebook[middle].name === name) {
      return phonebook[middle].number;
    }

    if (phonebook[middle].name > name) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }
  }
  return "Name not found!";
}

console.log(solution(phonebook, "Alex Bowman")); // '48-2002'
console.log(solution(phonebook, "None")); // 'Name not found!'
console.log(solution([], "None")); // 'Name not found!'

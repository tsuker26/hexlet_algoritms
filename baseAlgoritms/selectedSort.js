const selectedSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    let indexMin = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
    }

    const temp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = temp;
  }
};

const items = [2, 3, 4, 3, 1, 2, 4, 5, 1, 2];
selectedSort(items);
console.log(items); // => [1, 1, 2, 2, 2, 3, 3, 4, 4, 5]

const bubbleSort = (array) => {
  for (let limit = array.length - 1; limit > 0; limit--) {
    for (let i = 0; i < limit; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
};

const items = [2, 3, 4, 3, 1, 2, 4, 5, 1, 2];
bubbleSort(items);
console.log(items); // => [1, 1, 2, 2, 2, 3, 3, 4, 4, 5]

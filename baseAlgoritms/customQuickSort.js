const quickSort = (items, dir = "asc") => {
  if (items.length <= 1) {
    return items;
  }

  const pivotIndex = Math.floor(Math.random() * items.length);
  const pivot = items[pivotIndex];

  const less = [];
  const great = [];

  for (let i = 0; i < items.length; i++) {
    if (i === pivotIndex) continue;

    if (items[i] < pivot) {
      less.push(items[i]);
    } else {
      great.push(items[i]);
    }
  }

  if (!dir || dir === "asc") {
    return [...quickSort(less, dir), pivot, ...quickSort(great, dir)];
  }

  if (dir === "desc") {
    return [...quickSort(great, dir), pivot, ...quickSort(less, dir)];
  }
};

const items = [10, 20, 0, -1];

const items1 = [1, -1, 5, 1, 5, -2, -2];

console.log(quickSort(items)); // [-1, 0, 10, 20]
console.log(quickSort([])); // []
console.log(quickSort(items, "desc"));
console.log(quickSort(items, "asc"));

console.log(quickSort(items1, "asc"));
console.log(quickSort(items1, "desc"));
console.log(quickSort(items1));

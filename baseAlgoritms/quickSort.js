const partition = (items, left, right, pivot) => {
  while (true) {
    while (items[left] < pivot) {
      left += 1;
    }

    while (items[right] > pivot) {
      right -= 1;
    }

    if (left >= right) {
      return right + 1;
    }

    const temporary = items[left];
    items[left] = items[right];
    items[right] = temporary;

    left += 1;
    right -= 1;
  }
};

const sort = (items, left, right) => {
  const length = right - left + 1;

  if (length < 2) {
    return;
  }

  const pivot = items[left];

  const splitIndex = partition(items, left, right, pivot);
  sort(items, left, splitIndex - 1);
  sort(items, splitIndex, right);
};

const quicksort = (items) => sort(items, 0, items.length - 1);

const items = [57, 10, 52, 43, 55, 93, 34, 24, 99];
quicksort(items);
console.log(items); // => [ 10, 24, 34, 43, 52, 55, 57, 93, 99 ]

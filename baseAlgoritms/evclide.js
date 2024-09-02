const evclide = (a, b) => {
  return b ? evclide(b, a % b) : a;
};

console.log(evclide(28, 38)); // => 2
console.log(evclide(129, 90)); // => 3

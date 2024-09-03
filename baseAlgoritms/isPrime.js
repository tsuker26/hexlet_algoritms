const isPrime = (n) => {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  const sqrt = Math.sqrt(n);
  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(isPrime(2147483648)); // false
console.log(isPrime(87178291199)); //true

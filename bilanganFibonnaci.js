//saya menggunakan node js, bisa ditest dengan run "node bilanganFibonnaci.js"

function bilanganFibonacci(n) {
  const fibonacci = [1, 1];
  for (let i = 2; i < n; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }
  console.log(fibonacci);
}

bilanganFibonacci(5);

//saya menggunakan node js, bisa ditest dengan run "node triangele.js"

function triangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
      if (j <= n - i) {
        row += ' ';
      } else {
        row += '*';
      }
    }
    console.log(row);
  }
}

triangle(5);

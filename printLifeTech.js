//saya menggunakan node js, bisa ditest dengan run "node printLifeTech.js"

function printLifeTech(length) {
  for (let i = 1; i <= length; i++) {
    if (i % 2 === 0) {
      console.log('life');
    } else {
      console.log('tech');
    }
  }
}

printLifeTech(5);

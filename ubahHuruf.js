//saya menggunakan node js, bisa ditest dengan run "node triangele.js"

function ubahHuruf(kata, hurufLama, hurufBaru) {
  let hasil = '';
  for (let i = 0; i < kata.length; i++) {
    if (kata[i] === hurufLama) {
      hasil += hurufBaru;
    } else {
      hasil += kata[i];
    }
  }
  console.log(hasil);
}

ubahHuruf('sukiharji', 'i', 'o');

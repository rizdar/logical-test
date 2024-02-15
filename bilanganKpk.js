//saya menggunakan node js, bisa ditest dengan run "node bilanganKpk.js"
// rumus bilangan KPK = KPK(a, b) = (a * b) / FPB(a, b)
// FPB adalah Faktor Persekutuan Terbesar.

// Function untuk mencari FPB
function FPB(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Function untuk mencari KPK
function bilanganKPK(x, y) {
  const kpk = (x * y) / FPB(x, y);
  return kpk;
}

const kpk = bilanganKPK(5, 8);
console.log(`Bilangan KPK dari 5 dan 8 adalah ${kpk}`);

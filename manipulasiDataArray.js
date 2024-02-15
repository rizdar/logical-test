//saya menggunakan node js, bisa ditest dengan run "node manipulasiDataArray.js"

const outlet = [
  {
    id: 11,
    name: 'Hik Jo',
  },
  {
    id: 12,
    name: 'Outlet 1',
  },
];

const products = [
  {
    id: 1,
    outlet_id: 11,
    name: 'Bakso Bakar',
  },
  {
    id: 2,
    outlet_id: 11,
    name: 'Bakso Goreng',
  },
  {
    id: 3,
    outlet_id: 12,
    name: 'Es Teh',
  },
];

function manipulasiDataArray(outlet, products) {
  const result = [];

  // Iterasi melalui array outlet
  for (const outletItem of outlet) {
    const outletId = outletItem.id;
    const outletName = outletItem.name;
    const outletProducts = [];

    // Iterasi melalui array products untuk mencari produk yang sesuai dengan outlet_id
    for (const product of products) {
      if (product.outlet_id === outletId) {
        outletProducts.push(product);
      }
    }

    // Buat objek baru yang berisi informasi outlet dan produk-produknya
    const outletInfo = {
      id: outletId,
      name: outletName,
      products: outletProducts,
    };

    // Tambahkan objek baru ke dalam array result
    result.push(outletInfo);
  }

  return JSON.stringify(result);
}

const manipulatedData = manipulasiDataArray(outlet, products);
console.log(manipulatedData);

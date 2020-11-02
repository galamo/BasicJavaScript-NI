// object decleration

// name
// price
// id
// numberOfStocks

// key / value = syntax key:value
const product = { name: "Milk", price: 5, id: 2354876 };
const product2 = { name: "Bread", price: 10, id: 32523 };
console.log(product);
console.log(product2);

// get only name
console.log(product.name);
console.log(product.price);
console.log(product.id);

// edit price
product.price = 10;
console.log("new price:");
console.log(product.price);

// object passed by ref
const product3 = product2;
console.log(product3);
product3.price = 20;
console.log(product2);

// delete key
delete product3.id;
console.log(product2);

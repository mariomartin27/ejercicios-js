const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];

for (let i=0; i < products.length; index++){
  const ropa= products[i];
  if(ropa.includes (`Camiseta`)){
    console.log(ropa)
  }
}

for (let i=0; i < products.length; index++){
  const ropa= products[i];
  if(ropa.toLowerCase().includes (`Camiseta`.toLowerCase())){
    console.log(ropa)
  }
}
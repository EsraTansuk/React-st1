// var pName = "IPhone 14 Pro "
// var pPrice = 50000

// var product = {
//   name: "IPhone 15",
//   price: 40000,
//   description: "iyi telefon",
//   colors: ["silver", "gold", "red"],
// };

var products = [
  {
    name: "IPhone 15",
    price: 40000,
    description: "iyi telefon",
    colors: ["silver", "gold", "red"],
  },

  {
    name: "IPhone 14",
    price: 60000,
    description: "iyi telefon",
    colors: ["white", "blue", "red"],
  },

  {
    name: "IPhone 17",
    price: 80000,
    description: "iyi telefon",
    colors: ["white", "blue", "red"],
  },
];

function formatPrice(product) {
  return <p>{product.price} TL</p>;
}

// function printDescription(product) {
//   if (product.description) {
//     return <p> {product.description} </p>;
//   }
// }

var template = (
  <div>
    <h1 id="header">Ürün Listesi</h1>

    {products.map((product,index) => (
      <div className="product-details" key={index}>
        {product.name && product.name.length > 3 ? (
          <h2> {product.name} </h2>
        ) : (
          <p>ürün ismi girilmemiştir</p>
        )}
        {/* <p>{formatPrice(product)}</p> */}
        {product.price && product.price > 0 && formatPrice(product)}
        {/* { printDescription(product) } */}
        {/* product description varsa && */}
        {product.description && <p>{product.description}</p>}
        {product.colors.length > 0 ? <p>renk seçeneklerimiz mevcut</p> : ""}

        <ul>
          {/* color map içine gelecek her bir değerin ismi  */}
          {product.colors.map((color, index) => (
            <li key={index}> {color}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);

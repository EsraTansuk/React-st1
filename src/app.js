var products = [
  {
    name: "IPhone 15",
    price: 40000,
  },

  {
    name: "IPhone 14",
    price: 60000,
  },

  {
    name: "IPhone 17",
    price: 80000,
  },
];

// function printDescription(product) {
//   if (product.description) {
//     return <p> {product.description} </p>;
//   }
// }

function addProduct(event, pName) {
  console.log(event.target, pName);
}

var template = (
  <div>
    <h1 id="header">Ürün Listesi</h1>

    {products.map((product, index) => (
      <div className="product-details" key={index}>
        {<h2>{product.name}</h2>}
        {product.price}
        <button
          type="button"
          id={index}
          onClick={(event) => addProduct(event, product.name)}
        >
          Ekle
        </button>
      </div>
    ))}
  </div>
);

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);

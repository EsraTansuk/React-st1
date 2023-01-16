var root = ReactDOM.createRoot(document.getElementById("root"));

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

var selectedProducts = [];

function addProduct(event, pName) {
  console.log(event.target, pName);
  if (!selectedProducts.includes(pName)){
    selectedProducts.push(pName);
  }
  
  renderApp();
}

function renderApp() {
  var template = 
    <div>
      <h1 id="header">Ürün Listesi</h1>
      <h3>Seçili ürünler: { selectedProducts.length }</h3>

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
      ))
      }

    </div>;
    root.render(template);
    
};

renderApp();



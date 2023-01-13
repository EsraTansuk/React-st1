"use strict";

var products = [{
  name: "IPhone 15",
  price: 40000
}, {
  name: "IPhone 14",
  price: 60000
}, {
  name: "IPhone 17",
  price: 80000
}];

// function printDescription(product) {
//   if (product.description) {
//     return <p> {product.description} </p>;
//   }
// }

function addProduct(event, pName) {
  console.log(event.target, pName);
}
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "\xDCr\xFCn Listesi"), products.map(function (product, index) {
  return /*#__PURE__*/React.createElement("div", {
    className: "product-details",
    key: index
  }, /*#__PURE__*/React.createElement("h2", null, product.name), product.price, /*#__PURE__*/React.createElement("button", {
    type: "button",
    id: index,
    onClick: function onClick(event) {
      return addProduct(event, product.name);
    }
  }, "Ekle"));
}));
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);

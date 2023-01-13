"use strict";

// var pName = "IPhone 14 Pro "
// var pPrice = 50000

// var product = {
//   name: "IPhone 15",
//   price: 40000,
//   description: "iyi telefon",
//   colors: ["silver", "gold", "red"],
// };

var products = [{
  name: "IPhone 15",
  price: 40000,
  description: "iyi telefon",
  colors: ["silver", "gold", "red"]
}, {
  name: "IPhone 14",
  price: 60000,
  description: "iyi telefon",
  colors: ["white", "blue", "red"]
}, {
  name: "IPhone 17",
  price: 80000,
  description: "iyi telefon",
  colors: ["white", "blue", "red"]
}];
function formatPrice(product) {
  return /*#__PURE__*/React.createElement("p", null, product.price, " TL");
}

// function printDescription(product) {
//   if (product.description) {
//     return <p> {product.description} </p>;
//   }
// }

var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "\xDCr\xFCn Listesi"), products.map(function (product, index) {
  return /*#__PURE__*/React.createElement("div", {
    className: "product-details",
    key: index
  }, product.name && product.name.length > 3 ? /*#__PURE__*/React.createElement("h2", null, " ", product.name, " ") : /*#__PURE__*/React.createElement("p", null, "\xFCr\xFCn ismi girilmemi\u015Ftir"), product.price && product.price > 0 && formatPrice(product), product.description && /*#__PURE__*/React.createElement("p", null, product.description), product.colors.length > 0 ? /*#__PURE__*/React.createElement("p", null, "renk se\xE7eneklerimiz mevcut") : "", /*#__PURE__*/React.createElement("ul", null, product.colors.map(function (color, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, " ", color);
  })));
}));
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);

var itemList = [];
var priceList = [];

function addItem(item, price) {
  itemList.push(item);
  priceList.push(price);
}

function genList() {
  var total = 0
  for (var i = 0 ; i < itemList.length; i++) {
    console.log(itemList[i] + " $" + priceList[i]);
    total += priceList[i];
  }
  console.log("Total: $" + total.toString());
}
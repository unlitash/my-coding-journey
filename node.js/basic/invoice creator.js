let invoiceCreator = function (productPrice, tax = 9){
    let taxPercentage = (tax * productPrice / 100);
    let finalPrice = (productPrice + taxPercentage)
    let message = `pre tax price: $${productPrice}, tax percentage: %${tax}, you should pay: $${finalPrice}`;
    return (message)
}

console.log(invoiceCreator(1000))
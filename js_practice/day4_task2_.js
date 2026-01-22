let order = {
    name: "bicycle",
    price: 7999,
    stock: 10
};

function placeOrder(product, quantity) {

    
    if (isNaN(quantity) || quantity <= 0) {
        console.log("Please enter a valid quantity");
        return;
    }

    // 2️ stock check
    if (quantity > product.stock) {
        console.log("Sorry, not enough stock available");
        return;
    }

    // 3️ order successful
    let totalPrice = product.price * quantity;
    product.stock = product.stock - quantity;

    console.log("Order placed successfully!");
    console.log("Product:", product.name);
    console.log("Quantity:", quantity);
    console.log("Total Price:", totalPrice);
    console.log("Remaining Stock:", product.stock);
}

// function call
placeOrder(order, 3);

let items_array = [
    { "name": "Dingo Dog Bones", "id": 1,
    description:"The best dog bones of all time. Holy crap. Your dog will be begging forthese things I got curious once and ate one myself. Im a fan.",
     price: 12.99, qty: 1,image:"https://s.cdpn.io/3/dingo-dog-bones.jpg" },
     { "name": "Nutro™ Adult Lamb and Rice Dog Food", "id": 2,
     description:"Who doesn't like lamb and rice? We've all hit the halal cart at 3am",
      price: 45.99, qty: 1,image:"https://s.cdpn.io/3/large-NutroNaturalChoiceAdultLambMealandRiceDryDogFood.png" },
     
];

var cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

// localStorage.setItem("cart", []);
function addToCart(index) {
    cart.push(items_array[index]);
    localStorage.setItem("cart", JSON.stringify(cart));
}
function $(container) {
    return document.getElementById(container);
};

function appendNode(parent, element) {
    parent.appendChild(element);
};

function createNode(node) {
    let element = document.createElement(node);
    return element;
};

function displayCart(items) {
    let subtotal = 0;
    let total = 0;
    let tax = 0.05;
    let shipping = 15;
    let item_container = $("cart");
    item_container.innerHTML = "";
    let subtotalText = $("cart-subtotal");
    let taxText = $("cart-tax");
    let shippingText = $("cart-shipping");
    let totalText = $("cart-total");
    for (let i = 0; i < items.length; i++) {
        let item = items[i];

        let item_node = createNode("div");
        item_node.className="product";

        let product_img = createNode("div");
        product_img.className="product-image";
        const img = document.createElement("img");
        img.src = item.image;
        
        let productName = createNode("div");
        productName.className="product-details";
        productName.innerHTML='<div class="product-title">'+item.name+'</div>'+
        '<p class="product-description">'+item.description+'</p>'

        let productPrice = createNode("div");
        productPrice.className="product-price";
        productPrice.innerHTML=item.price;
        let x = parseFloat(item.qty*item.price).toFixed(2)
        subtotal += parseFloat(x);

        let productQuantity = createNode("div");
        productQuantity.className="product-quantity";
        productQuantity.innerHTML='<input type="number" id="qty-'+i+'" value="'+item.qty+'" min="1" onchange="changeQuantity('+i+')">';

        let productTrash = createNode("div");
        productTrash.className="product-removal";
        productTrash.innerHTML='<button class="remove-product">Remove</button>';
        productTrash.onclick = function () {
            removeItem(i);
        };
        let productSubTotal = createNode("div");
        productSubTotal.className="product-line-price";
        productSubTotal.innerHTML=parseFloat(item.price * item.qty).toFixed(2);

       
        appendNode(product_img,img)
        appendNode(item_node,product_img)
        appendNode(item_node,productName)
        appendNode(item_node,productPrice)
        appendNode(item_node,productQuantity)
        appendNode(item_node,productTrash)
        appendNode(item_node,productSubTotal)
        appendNode(item_container,item_node)

        taxamt = tax * subtotal
        total = subtotal + taxamt + shipping
        subtotalText.innerText=parseFloat(subtotal).toFixed(2)
        totalText.innerText=parseFloat(total).toFixed(2)
        taxText.innerText=parseFloat(taxamt).toFixed(2)
        shippingText.innerText=parseFloat(shipping).toFixed(2)

    }
}
displayCart(cart)


function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart(cart);
}
function changeQuantity(index) {
    newQty = $("qty-"+index).value;
    for (var i = 0; i < cart.length; i++) {
        if (i === index) {
            cart[i].qty = parseInt(newQty); 
        }
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      displayCart(cart);
}
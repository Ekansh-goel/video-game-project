var items_array = [];
function loadJson() {
    jQuery.ajax({
      url: '/js/product.json',
      async: false,
      dataType: 'json',
      success: function (json) {
        items_array = json;
      }
    });
}
loadJson()


var cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

// localStorage.setItem("cart", []);
function addToCart(id) {
   alert("item added successfully")
    product = items_array.find(x => x.id ==id);
    
    if(product){
    cart.push(product);
    localStorage.setItem("cart", []);
    localStorage.setItem("cart", JSON.stringify(cart));
    }
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

function displayCart() {
    let subtotal = 0;
    let total = 0;
    let tax = 0.05;
    let shipping = 15;
    let item_container = document.getElementById("cart");
    item_container.innerHTML = null;
    let subtotalText = $("cart-subtotal");
    let taxText = $("cart-tax");
    let shippingText = $("cart-shipping");
    let totalText = $("cart-total");
    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];

        let item_node = createNode("div");
        item_node.className="product";

        let product_img = createNode("div");
        product_img.className="product-image";
        const img = document.createElement("img");
        img.src = '../assets/'+item.image;
        // image
        
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



function removeItem(index) {
    alert("item Removed successfully")
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart(cart);
}
function changeQuantity(index) {
    alert("item quantitychanged")
    newQty = $("qty-"+index).value;
    for (var i = 0; i < cart.length; i++) {
        if (i === index) {
            cart[i].qty = parseInt(newQty); 
        }
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      displayCart(cart);
}
function getproduct() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productId = urlParams.get('product')
    product = items_array.find(x => x.id ==productId);
    if(product){
        let product_image = document.getElementById("product_image");
        product_image.src = '../assets/'+product.image;
        // image 
        let product_title = document.getElementById("product_title");
        product_title.innerText = product.name;
        let product_description = document.getElementById("product_description");
        product_description.innerText = product.description;
        let product_price = document.getElementById("product_price");
        product_price.innerText = ((product.price).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          }));
          let add_to_cart = document.getElementById("add_to_cart");
          add_to_cart.onclick = function() {     addToCart(productId); };
    }

}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
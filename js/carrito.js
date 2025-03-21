// Datos de productos
const products = [
    { id: 1, name: "Maceta Pokemon Chikorita 3D", price: 100, img: '../assets/macetas/1.jpg' },
    { id: 2, name: "Maceta Pokemon Bulbasaur 3D", price: 200, img: '../assets/macetas/2.jpg' },
    { id: 3, name: "Maceta Pokemon Charmander 3D", price: 250, img: '../assets/macetas/3.jpg' },
    { id: 4, name: "Maceta Pokemon Gengar 3D", price: 200, img: '../assets/macetas/4.jpg' },
    { id: 5, name: "Maceta Pokemon Pikachu 3D", price: 300, img: '../assets/macetas/5.jpg' },
    { id: 6, name: "Maceta Pokemon Chikorita 3D", price: 110, img: '../assets/macetas/1.jpg' }
];

// Variables
let cart = []; // Array para el carrito
const cartItemsElement = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
const productListElement = document.getElementById("product-list");

// Función para mostrar productos
function displayProducts() {
    productListElement.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("col-12","col-sm-12", "col-md-12", "mb-6", "mb-sm-6"); // Crea columnas de 4 unidades en pantallas medianas y añade margen inferior
        productElement.innerHTML = `
            <div class="card">
                <img src="${product.img}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title roboto-flex">${product.name}</h5>
                    <p class="card-text roboto-flex">Precio: $${product.price}</p>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Añadir al carrito</button>
                </div>
            </div>
             <br>
        `;
        productListElement.appendChild(productElement);
    });
}

// Función para agregar al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push({ ...product }); // Copia el objeto completo, incluyendo la imagen
        updateCart();
    }
}

// Función para actualizar el carrito
function updateCart() {
    const SHIPPING_COST = 80;
    cartItemsElement.innerHTML = ''; // Limpiar carrito actual
    let total = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement("div"); // Usamos <div> en lugar de <li>
        cartItemElement.classList.add("cart-item"); // Añadimos una clase para estilos
        cartItemElement.innerHTML = `
            <br>
            <img src="${item.img}" alt="${item.name}" width="100">
            ${item.name} - $${item.price}
        `;
        cartItemsElement.appendChild(cartItemElement);
        total += item.price;
    });

    total += SHIPPING_COST;

    totalPriceElement.textContent = total;

        // Guardar el carrito en localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
}

function clearCart() {
    cart = []; // Vaciar el array del carrito
    localStorage.removeItem('cart'); // Eliminar el carrito de localStorage
    updateCart(); // Actualizar la visualización del carrito
}
const clearCartButton = document.getElementById("clear-cart-button");
clearCartButton.addEventListener("click", clearCart);
// Llamar a loadCart al inicio
loadCart();

updateCart();
// Mostrar productos cuando cargue la página
displayProducts();


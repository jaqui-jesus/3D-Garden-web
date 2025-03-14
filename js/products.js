const Products = [
  {
    id: 1,
    title: "Puma Rose",
    image:
      "https://images.unsplash.com/photo-1608667508764-33cf0726b13a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Calzado deportivo versátil, ideal para cualquier ocasión, con diseño moderno y comodidad duradera.",
    quantityStock: 1,
    price: 2500.0,
    categories: ["Fashion", " Calzado"],
    brand: "Puma",
  },
  {
    id: 2,
    title: "Nike Y2K",
    image:
      "https://images.unsplash.com/photo-1590673846749-e2fb8f655df8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM2fHxzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Tenis clásicos que combinan estilo y funcionalidad, perfectos para el día a día o actividades deportivas",
    quantityStock: 5,
    price: 3800.0,
    categories: ["Diseñador", " Calzado"],
    brand: "Nike",
  },
  {
    id: 3,
    title: "Nike Air Max v2",
    image:
      "https://images.unsplash.com/photo-1600185365778-7875a359b924?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
    description:
      "Zapatillas cómodas y resistentes, diseñadas para ofrecer soporte y estilo en cada paso.",
    quantityStock: 10,
    price: 3500.0,
    categories: ["Comodidad", " Calzado"],
    brand: "Nike",
  },
  {
    id: 4,
    title: "Levi's",
    image:
      "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY4fHx8ZW58MHx8fHx8",
    description:
      "Tenis con un diseño atemporal, ideales para un look casual y un rendimiento óptimo.",
    quantityStock: 2,
    price: 1800.0,
    categories: ["Casual", " Calzado"],
    brand: "Levi's",
  },
  {
    id: 5,
    title: "Jordan F5",
    image:
      "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2N3x8fGVufDB8fHx8fA%3D%3D",
    description:
      "Calzado deportivo ligero y flexible, perfecto para movilidad y confort en cualquier actividad.",
    quantityStock: 8,
    price: 1500.0,
    categories: ["Basquetbol", " Calzado"],
    brand: "Jordan",
  },
  {
    id: 5,
    title: "Jordan F5",
    image:
      "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2N3x8fGVufDB8fHx8fA%3D%3D",
    description:
      "Calzado deportivo ligero y flexible, perfecto para movilidad y confort en cualquier actividad.",
    quantityStock: 8,
    price: 1500.0,
    categories: ["Basquetbol", " Calzado"],
    brand: "Jordan",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const productCard = document.getElementById("productsCards");

  Products.forEach((product) => {
    //Declaration of card elements
    const col = document.createElement("div");
    col.className = "col col-product";
    const card = document.createElement("div");
    card.className = "card d-flex flex-column h-100 align-items-center";
    const img = document.createElement("img");
    img.className = "card-img-top img-fluid rounded products-img";
    const cardBody = document.createElement("div");
    cardBody.className = "card-body d-flex flex-column justify-content-between";
    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    const cardText = document.createElement("p");
    cardText.className = "card-text";
    const addCart = document.createElement("a");
    addCart.className = "btn btn-primary";

    //Set values for each element
    img.src = product.image;
    cardTitle.innerHTML = product.brand;
    cardText.innerHTML = "Precio: $" + product.price + ".00" + "<br>" +"categorias: "+ product.categories;
    addCart.innerHTML = "agregar al carrito";

    //add to the HTML each element
    cardBody.append(cardTitle, cardText, addCart);
    card.append(img, cardBody);
    col.append(card);
    productCard.append(col);
  });
});

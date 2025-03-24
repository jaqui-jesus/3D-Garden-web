document.addEventListener("DOMContentLoaded", () => {
  const cardNumberInput = document.getElementById("cardNumber");
  const cardBrand = document.getElementById("card-brand");
  const shippingForm = document.getElementById("shipping-form");
  const paymentForm = document.getElementById("payment-form");

  const cardTypes = {
    visa: /^4/,
    mastercard: /^5[1-5]/,
    amex: /^3[47]/,
  };

  // Función para detectar el tipo de tarjeta
  function detectCardType(number) {
    number = number.replace(/\s+/g, ""); // Eliminar espacios
    if (cardTypes.visa.test(number)) {
      return "VISA";
    } else if (cardTypes.mastercard.test(number)) {
      return "MasterCard";
    } else if (cardTypes.amex.test(number)) {
      return "AMEX";
    } else {
      return "Invalid";
    }
  }

  // Escuchar cambios en el número de tarjeta
  cardNumberInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Solo números
    value = value.replace(/(\d{4})/g, "$1 ").trim(); // Espacios cada 4 dígitos
    e.target.value = value;

    const cardType = detectCardType(value);
    let cardImageUrl = "";

    if (cardType === "VISA") {
      cardImageUrl =
        "https://w7.pngwing.com/pngs/308/426/png-transparent-visa-logo-credit-card-visa-logo-payment-visa-blue-text-trademark-thumbnail.png";
    } else if (cardType === "MasterCard") {
      cardImageUrl =
        "https://w7.pngwing.com/pngs/397/885/png-transparent-logo-mastercard-product-font-mastercard-text-orange-logo.png";
    } else if (cardType === "AMEX") {
      cardImageUrl =
        "https://e7.pngegg.com/pngimages/868/55/png-clipart-logo-american-express-cards-bank-insurance-bank-blue-text.png";
    } else {
      cardImageUrl = "https://cdn-icons-png.flaticon.com/512/7596/7596460.png";
    }

    cardBrand.innerHTML = "";

    if (cardImageUrl) {
      const imgElement = document.createElement("img");
      imgElement.src = cardImageUrl;
      imgElement.alt = cardType;
      imgElement.width = 40;

      cardBrand.appendChild(imgElement);
    }
  });

  // Enviar formulario de dirección
  shippingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
      fullName: document.getElementById("fullName").value,
      street: document.getElementById("street").value,
      city: document.getElementById("city").value,
      zip: document.getElementById("zip").value,
    };

    fetch("https://api.tu-servidor.com/shipping", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => alert("Dirección guardada"))
      .catch((err) => console.error("Error:", err));
  });

  paymentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
      cardNumber: document
        .getElementById("cardNumber")
        .value.replace(/\s/g, ""),
      expiryDate: document.getElementById("expiryDate").value,
      cvv: document.getElementById("cvv").value,
    };
  });
});

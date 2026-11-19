document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".main-nav");
  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.textContent = isOpen ? "×" : "☰";
    });
  }

  // Footer year
  document.querySelectorAll(".year").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // Simple demo bag counter (stored in this browser only)
  const countElements = document.querySelectorAll(".cart-count");
  let bagCount = Number(localStorage.getItem("verdantstepBagCount") || 0);
  const updateBag = () => countElements.forEach(el => el.textContent = bagCount);
  updateBag();

  const addButton = document.getElementById("add-to-bag");
  if (addButton) {
    addButton.addEventListener("click", () => {
      const size = document.getElementById("shoe-size").value;
      const message = document.getElementById("cart-message");
      if (!size) {
        message.textContent = "Please choose a UK size first.";
        return;
      }
      bagCount += 1;
      localStorage.setItem("verdantstepBagCount", String(bagCount));
      updateBag();
      message.textContent = `Added to your demo bag in UK size ${size}.`;
    });
  }

  // Product details selected from the URL query string
  const productName = document.getElementById("product-name");
  if (productName) {
    const products = {
      terra: { name: "Terra Everyday", price: "£70", description: "A versatile everyday trainer with a clean silhouette and considered material choices.", art: "visual-sand" },
      grove: { name: "Grove Runner", price: "£75", description: "A sport-inspired everyday style in a forest and cream colourway.", art: "visual-green" },
      cloud: { name: "Cloud Low", price: "£65", description: "A minimal off-white trainer designed to complement everyday outfits.", art: "visual-white" }
    };
    const selected = new URLSearchParams(window.location.search).get("style") || "terra";
    const product = products[selected] || products.terra;
    productName.textContent = product.name;
    document.getElementById("product-price").textContent = product.price;
    document.getElementById("product-description").textContent = product.description;
    const art = document.getElementById("detail-art");
    art.classList.remove("visual-sand", "visual-green", "visual-white");
    art.classList.add(product.art);
  }

  // Shop sorting
  const sortSelect = document.getElementById("sort-products");
  const productGrid = document.getElementById("shop-products");
  if (sortSelect && productGrid) {
    sortSelect.addEventListener("change", () => {
      const cards = Array.from(productGrid.children);
      if (sortSelect.value === "low") cards.sort((a,b) => Number(a.dataset.price) - Number(b.dataset.price));
      else if (sortSelect.value === "high") cards.sort((a,b) => Number(b.dataset.price) - Number(a.dataset.price));
      else cards.sort((a,b) => Number(b.dataset.price) - Number(a.dataset.price) === 5 ? -1 : 0);
      cards.forEach(card => productGrid.appendChild(card));
    });
  }

  // Demo contact form: validates fields but does not transmit or store data
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", event => {
      event.preventDefault();
      document.getElementById("form-message").textContent =
        "Thank you! This is a demonstration form, so your message has not been sent.";
      contactForm.reset();
    });
  }
});
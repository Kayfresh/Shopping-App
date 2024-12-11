const onSale = [
  {
    image: {
      thumbnail: "/Resources/image-waffle-thumbnail.jpg",
      mobile: "/Resources/image-waffle-mobile.jpg",
      tablet: "/Resources/image-waffle-tablet.jpg",
      desktop: "/Resources/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    image: {
      thumbnail: "/Resources/image-creme-brulee-thumbnail.jpg",
      mobile: "/Resources/image-creme-brulee-mobile.jpg",
      tablet: "/Resources/image-creme-brulee-tablet.jpg",
      desktop: "/Resources/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    image: {
      thumbnail: "/Resources/image-macaron-thumbnail.jpg",
      mobile: "/Resources/image-macaron-mobile.jpg",
      tablet: "/Resources/image-macaron-tablet.jpg",
      desktop: "/Resources/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    image: {
      thumbnail: "/Resources/image-tiramisu-thumbnail.jpg",
      mobile: "/Resources/image-tiramisu-mobile.jpg",
      tablet: "/Resources/image-tiramisu-tablet.jpg",
      desktop: "/Resources/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    image: {
      thumbnail: "/Resources/image-baklava-thumbnail.jpg",
      mobile: "/Resources/image-baklava-mobile.jpg",
      tablet: "/Resources/image-baklava-tablet.jpg",
      desktop: "/Resources/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    image: {
      thumbnail: "/Resources/image-meringue-thumbnail.jpg",
      mobile: "/Resources/image-meringue-mobile.jpg",
      tablet: "/Resources/image-meringue-tablet.jpg",
      desktop: "/Resources/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    image: {
      thumbnail: "/Resources/image-cake-thumbnail.jpg",
      mobile: "/Resources/image-cake-mobile.jpg",
      tablet: "/Resources/image-cake-tablet.jpg",
      desktop: "/Resources/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "/Resources/image-brownie-thumbnail.jpg",
      mobile: "/Resources/image-brownie-mobile.jpg",
      tablet: "/Resources/image-brownie-tablet.jpg",
      desktop: "/Resources/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "/Resources/image-panna-cotta-thumbnail.jpg",
      mobile: "/Resources/image-panna-cotta-mobile.jpg",
      tablet: "/Resources/image-panna-cotta-tablet.jpg",
      desktop: "/Resources/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];

// REMEMBER TO SET OVERFLOW TO HIDDEN WHEN THE CONFIRMED MESSAGE IS DISPLAYED

const products = document.querySelector(".products-list");
const cartQty = document.querySelector(".cart-qty");
const empty = document.querySelector(".empty");
const confirmBtn = document.querySelector(".confirm-order-btn");

products.innerHTML = "";

onSale.forEach((items) => {
  const itemDiv = document.createElement("div");
  itemDiv.className = "items";
  itemDiv.innerHTML = `
  <img class="desktop" src="${items.image.desktop}" alt=""/>
  
  <img src="${items.image.tablet}" class="tablet" alt="" />
  
  <img class="mobile" src="${items.image.mobile}" alt="" />
  <div class="add">
    <img src="/Resources/icon-add-to-cart.svg" alt="" />
    <p>Add to Cart</p>
  </div>
  <div class='added'>
  <img class="decrease" src="/Resources/icon-decrement-quantity.svg" alt="" />
  <p class="qty"></p>
  <img class="increase" src="/Resources/icon-increment-quantity.svg" alt="" />
  </div>
  <div class="info">
  <p>${items.category}</p>
  <h2>${items.name}</h2>
  <h3>&dollar; ${items.price.toFixed(2)}</h3>
  </div>
  `;
  products.appendChild(itemDiv);

  const add = itemDiv.querySelector(".add");
  const added = itemDiv.querySelector(".added");
  const increase = added.querySelector(".increase");
  const decrease = added.querySelector(".decrease");
  const qty = added.querySelector(".qty");

  added.style.display = "none";
  add.style.display = "flex";

  const carted = (add, added) => {
    add.style.display = "none";
    added.style.display = "flex";
    qty.textContent = 1;
    cartQty.textContent++;
  };

  const unCarted = (add, added) => {
    add.style.display = "flex";
    added.style.display = "none";
  };

  add.addEventListener("click", () => {
    carted(add, added);
    empty.style.display = "none";
    confirmBtn.style.display = "block";
  });

  increase.addEventListener("click", () => {
    qty.textContent++;
    cartQty.textContent++;
  });

  decrease.addEventListener("click", () => {
    if (qty.textContent == 1) {
      unCarted(add, added);
      cartQty.textContent--;
      if (cartQty.textContent == 0) {
        empty.style.display = "flex";
        confirmBtn.style.display = "none";
      } else {
        empty.style.display = "none";
      }
    } else {
      qty.textContent--;
      cartQty.textContent--;
    }
  });
});

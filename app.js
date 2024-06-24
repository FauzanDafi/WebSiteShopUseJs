const openCart = document.querySelector(".box-cart");
const boxItems = document.querySelector(".box-items");
const totalDefault = document.querySelector(".cart-default");
const listCart = document.querySelector(".cart-items");
const total = document.querySelector(".total");
const closeCart = document.querySelector("#close");
const cart = document.querySelector(".cart");

openCart.addEventListener("click", () => {
  cart.classList.toggle("active");
  console.log("sukses");
});

closeCart.addEventListener("click", () => {
  cart.classList.remove("active");
});

let itemCarts = [];

let products = [
  {
    id: 1,
    img: "1.jpg",
    price: 12000,
    name: "produk 1",
  },
  {
    id: 2,
    img: "2.jpg",
    price: 1700,
    name: "produk 2",
  },
  {
    id: 3,
    img: "3.jpg",
    price: 2000,
    name: "produk 3",
  },
  {
    id: 4,
    img: "4.jpg",
    price: 18000,
    name: "produk 4",
  },
  {
    id: 5,
    img: "5.jpg",
    price: 15000,
    name: "produk 5",
  },
  {
    id: 6,
    img: "6.jpg",
    price: 28000,
    name: "produk 6",
  },
];

const initApp = () => {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
        <img src="/IMG/${value.img}">
        <div class="title">${value.name}</div>
        <div class='price'>${value.price}</div>
        <button onclick="addToCart(${key})">buy</button>
        `;
    boxItems.appendChild(newDiv);
    products.push(itemCarts);
  });
};

initApp();

const addToCart = (key) => {
  if (itemCarts[key] == null) {
    itemCarts[key] = JSON.parse(JSON.stringify(products[key]));
    itemCarts[key].quantity = 1;
  }
  reloadCart();
};

const reloadCart = () => {
  listCart.innerHTML = "";
  let count = 0;
  let price = 0;

  itemCarts.forEach((value, key) => {
    price = price + value.price;
    count = count + value.quantity;

    if (value != null) {
      let li = document.createElement("li");
      li.innerHTML = `
      <div><img src="IMG/${value.img}"></div>
      <div class='cartTitle'>${value.name}</div>
      <div class='cartPrice'>${value.price}</div>

<div class="quantity-box">
<button class="buttonCart" onclick="changeQuantity(${key}.${
        value.quantity - 1
      })">-</button>
<div>${count}</div>
<button class="buttonCart" onclick="changeQuantity(${key}.${
        value.quantity + 1
      })">+</button>
</div>
      `;

      listCart.appendChild(li);

      total.innerText = price;
      totalDefault.innerText = count;
    }
  });
};

const changeQuantity = (key, value) => {
  if (value.quantity == 0) {
    delete listCart[key];
  } else {
    listCart[key].quantity = value.quantity;
    listCart[key].price = value.quantity * products[key].price;
  }
  reloadCart();
};

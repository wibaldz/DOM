const cartButton = document.querySelector(".cart-button");
const modal = document.querySelector(".modal");
const addButtons = document.querySelectorAll(".action button");
let cartItems = [];

cartButton.addEventListener("click", () => {
  modal.classList.toggle("active");
});
addButtons.forEach((button) =>
  button.addEventListener("click", (event) => {
    let cartItem = {
      title: event.target.parentNode.parentNode.querySelector("h3").innerText,
      price:
        event.target.parentNode.parentNode.querySelector(".action p").innerText,
    };
    if (cartItems.find((item) => item.title === cartItem.title)) {
      alert("Item already in cart");
    } else {
      cartItems.push(cartItem);
      modal.innerHTML += ` <div class="cart-item">
   <h3>${cartItem.title}</h3>
   <p>${cartItem.price}</p>
   <div class="quantity">
     <i class="fa-solid fa-minus"></i>
     <p>1</p>
     <i class="fa-solid fa-plus"></i>
   </div>
   <p>${cartItem.price}</p>
 </div>;`;

      let cartItemQuantity = modal.querySelectorAll(".quantity");
      cartItemQuantity.forEach((item) => {
        let minus = item.querySelector(".fa-minus");
        let q = item.querySelector("p");
        let plus = item.querySelector(".fa-plus");
        minus.addEventListener("click", () => {
          if (parseInt(q.innerText) > 0) {
            q.innerText = parseInt(q.innerText) - 1;
          }
        });
        plus.addEventListener("click", () => {
          q.innerHTML = parseInt(q.innerText) + 1;
        });
        console.log(minus);
      });
    }
  })
);

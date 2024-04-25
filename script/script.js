'use strict';

const searchForm = document.querySelector('.search-form');
const searchBox = document.getElementById('search-box');
const shoppingCart = document.querySelector('.shopping-cart');
const cartItemsEl = document.querySelector('.cart-items');
const loginForm = document.querySelector('.login-form');
const navbar = document.querySelector('.navbar');
const foodsEl = document.querySelector('.foods');
const totalSumEl = document.querySelector('.total-sum');
const totalItemsInCartEl = document.querySelector('.total-items-in-cart')

// newsletter confirmation
const confirmationModal = document.querySelector('.confirmation');
const confirmationOverlay = document.querySelector('.overlay');
const closeConfirmationBtn = document.getElementById('close-confirmation');
const showConfirmationBtn = document.getElementById('show-confirmation');
const emailAddressBox = document.getElementById('email-address');
const acceptCheckbox = document.getElementById('accept');
const userEmail = document.getElementById('user-email');

// menu - search, cart, login
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    searchBox.value = '';
};

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
};

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let foods = [];
fetch('./products.json')
    .then(results => results.json())
    .then(data => {
        foods = data;
        addFoodDataToHTML();
    });

function addFoodDataToHTML() {
    foods.forEach(food => {
        foodsEl.innerHTML +=
        `<div class="food-wrapper">
            <div class="food-box">
                <img src="${food.image}" alt="${food.name}">
                <h2 class="title">${food.name}</h2>
                <div class="price">${food.price} €</div>
                <div class="btn" onclick="addToCart(${food.id})">In den Warenkorb</div>
            </div>
        </div>`
    })
};

let cart = JSON.parse(localStorage.getItem('CART')) || [];
updateCart();

function addToCart(id) {
    if (cart.some(item => item.id === id)) {
        changeNumberOfUnits('plus', id);
    } else {
        const item = foods.find(food => food.id === id);
        cart.push({
            ...item,
            numberOfUnits: 1
        });
    }
    updateCart();
}

function updateCart (){
    renderCartItems();
    renderTotalSum();

    localStorage.setItem('CART', JSON.stringify(cart));
}

function renderTotalSum () {
    let totalPrice = 0,
       totalItems = 0;
   
       cart.forEach(item => {
           totalPrice += item.price * item.numberOfUnits;
           totalItems += item.numberOfUnits;
       });
       totalSumEl.innerHTML = `Insgesamt: ${totalPrice.toFixed(2)} €`
       totalItemsInCartEl.innerHTML = totalItems;
}

function renderCartItems () {
    cartItemsEl.innerHTML = '';
    cart.forEach(item => {
        cartItemsEl.innerHTML += `
            <div class="box">
                <i class="fas fa-trash" onclick="removeItemFromCart(${item.id})"></i>
                <img src="${item.image}" alt="${item.name}">
                <div class="content">
                    <h3>${item.name}</h3>
                    <span class="price-quantity">${item.price} € / ${item.quantity}</span>
                </div>
                <div class="units">
                    <div class="unit-btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                    <div class="unit-nr">${item.numberOfUnits}</div>
                    <div class="unit-btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>
                </div>
            </div>
            `
        }
    )
}

function removeItemFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

function changeNumberOfUnits (action, id) {
    cart = cart.map(item => {
        let numberOfUnits = item.numberOfUnits;
        if (item.id === id) {
            if (action === 'minus' && numberOfUnits > 1) {
                numberOfUnits--;
            } else if (action === 'plus') {
                // && numberOfUnits > item.instock
                numberOfUnits++;
            }
        }
        return ({
            ...item,
            numberOfUnits
        });
    })
    updateCart();
}

var swiper = new Swiper(".products-cat-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
      delay: 7500,
      disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

function showConfirmation () {
    const email = emailAddressBox.value.trim();
    userEmail.innerText = email;
    confirmationOverlay.classList.remove('hidden');
    confirmationModal.classList.remove('hidden');
}

function closeConfirmation () {
    confirmationOverlay.classList.add('hidden');
    confirmationModal.classList.add('hidden');
    emailAddressBox.value = '';
    acceptCheckbox.checked = false;
}

showConfirmationBtn.addEventListener('click', showConfirmation);
closeConfirmationBtn.addEventListener('click', closeConfirmation);
confirmationOverlay.addEventListener('click', closeConfirmation);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !confirmationModal.classList.contains('hidden')) {
        closeConfirmation();
    }
});

const search = () => {
    const searchBox = document.getElementById('search-item').value.toUpperCase();
    const foodsEl = document.querySelector('.foods');
    const productBox = document.querySelectorAll('.food-box');
    const productName = foodsEl.getElementsByTagName('h2');

    for (let i = 0; i < productName.length; i++) {
        const match = productBox[i].getElementsByTagName('h2')[0];

        if (match) {
            const textValut = match.textContent || match.innerHTML;

            if(textValut.toUpperCase().indexOf(searchBox) > -1) {
                productBox[i].style.display = '';
            } else {
                productBox[i].style.display = 'none';
            }
        }
    }
}
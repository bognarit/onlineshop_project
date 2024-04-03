'use strict';

const subtotalSumEl = document.querySelector('.subtotal-sum');
const totalSumEl = document.querySelector('.total-sum');
const cartItemsEl = document.querySelector('.cart-items');
let carts = JSON.parse(localStorage.getItem('CART')) || [];

function updateCart (){
    renderCartItems();
    renderTotalSum();

    localStorage.setItem('CART', JSON.stringify(carts));
}

function renderCartItems() {
    cartItemsEl.innerHTML = '';
    if (Object.keys(carts).length === 0) {
        cartItemsEl.innerHTML = `
                <div class="empty-cart">
                    <div>In Ihrem Warenkorb befinden sich keine Produkte.</div>
                    <a href="index.html#products" class="btn">Weiter einkaufen</a>
                </div>
                `;

    } else {
        carts.forEach(item => {
            cartItemsEl.innerHTML += `
                <div class="box">
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
                    <div class="total-item-price">${(item.price * item.numberOfUnits).toFixed(2)} €</div>
                    <a><i class="fas fa-trash" onclick="removeItemFromCart(${item.id})"></i></a>
                </div>
                `
            }
        )
    }
}
updateCart();

function renderTotalSum () {
    let subtotalPrice = 0;
    let totalPrice = 0;

    carts.forEach(item => {
        subtotalPrice += item.price * item.numberOfUnits;
        totalPrice += item.price * item.numberOfUnits;
    });
    subtotalSumEl.innerHTML = `${totalPrice.toFixed(2)} €`
    totalSumEl.innerHTML = `${totalPrice.toFixed(2)} €`
}

function removeItemFromCart(id) {
    carts = carts.filter(item => item.id !== id);
    updateCart();
}

function changeNumberOfUnits (action, id) {
    carts = carts.map(item => {
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
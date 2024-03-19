'use strict';

import { foods } from "../script/food-script.js";
import { nonFoods } from "../script/non-food-script.js";

const searchForm = document.querySelector('.search-form');
const shoppingCart = document.querySelector('.shopping-cart');
const loginForm = document.querySelector('.login-form');
const navbar = document.querySelector('.navbar');
const foodSection = document.querySelector('.food-slider');
const nonFoodSection = document.querySelector('.non-food-slider');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
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
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.toggle('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

const foodProducts = function (food) {
    foods.forEach(food => {
        foodSection.insertAdjacentHTML("beforeend",
        `<div class="swiper-wrapper">
            <div class="swiper-slide box">
                <img src="${food.image}" width="300" height="300">
                <h2 class="title">${food.title}</h2>
                <div class="price">${food.price} €</div>
                <a href="#" class="btn">In den Warenkorb</a>
            </div>
        </div>
        `
        )
    })
};

foodProducts(foods);

const nonFoodProducts = function (nonfood) {
    nonFoods.forEach(nonfood => {
        nonFoodSection.insertAdjacentHTML("beforeend",
        `<div class="swiper-wrapper">
            <div class="swiper-slide box">
                <img src="${nonfood.image}" width="300" height="300">
                <h2 class="title">${nonfood.title}</h2>
                <div class="price">${nonfood.price} €</div>
                <a href="#" class="btn">In den Warenkorb</a>
            </div>
        </div>
        `
        )
    })
};

nonFoodProducts(nonFoods);

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

// var swiper = new Swiper(".food-slider", {
//     loop: true,
//     spaceBetween: 20,
//     autoplay: {
//         delay: 7500,
//         disableOnInteraction: false,
//     },
//     centeredSlides: true,
//     breakpoints: {
//         0: {
//         slidesPerView: 1,
//         },
//         768: {
//         slidesPerView: 2,
//         },
//         1020: {
//         slidesPerView: 3,
//         },
//     },
//     });
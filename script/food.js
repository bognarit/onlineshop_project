'use strict';

const products = document.getElementById('food_products')

fetch('./foods.json')
    .then(results => results.json())
    .then(data => {
        data.forEach(post => {
            products.insertAdjacentHTML("beforeend",
            `<div>
                <article class="article">
                    <img src="${post.image}" width="300" height="300">
                    <h2 class="article_title">${post.title}</h2>
                    <div class="article_price">${post.price} €</div>
                </article>
            </div>
            `
            )
            
        })
    });
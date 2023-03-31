let products = [
    {
        name: `apple`,
        price: 2,
        image_url: `/images/grassy_hillside.jpeg`,
        description: `beautiful red apple`
    }, {
        name: `banana`,
        price: 1,
        image_url: `/images/grassy_hillside.jpeg`,
        description: `beautiful yellow banana`
    }, {
        name: `kiwi`,
        price: .5,
        image_url: `/images/grassy_hillside.jpeg`,
        description: `shiny green kiwi`
    }, {
        name: `grapes`,
        price: 2.5,
        image_url: `/images/grassy_hillside.jpeg`,
        description: `beautiful bundle of purple grapes`
    }
];

let product_container = document.getElementById(`products`);

for (counter = 0; counter < products.length; counter++) {
    product_container.insertAdjacentHTML(`beforeend`, `
<div class="product">
<h3>${products[counter][`name`]}</h3>
<img src="${products[counter][`image_url`]}" width="200px"/>
<p>${products[counter][`description`]}</p>
<h4>$${products[counter][`price`]}</h4>
<button product_name="${products[counter][`name`]}"
 product_price="${products[counter][`price`]}"
 product_description="${products[counter][`name`]}"
 product_image_url="${products[counter][`image_url`]}">
 ADD TO COOKIE
 </button>
 </div>
`);
};


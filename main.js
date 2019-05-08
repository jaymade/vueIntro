var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: '/assets/vmSocks-green-onWhite.jpg',
        link: 'https://www.amazon.com/Mens-Socks/b?ie=UTF8&node=1045708',
        inventory: 10,
        details: ["80% cotton", "20% poly", "100% awesome"],
        variants: [{
                vid: 2223,
                vColor: 'Green'
            },
            {
                vid: 2224,
                vColor: 'Blue'
            }
        ],
        cart: 0,
        },
         methods: {
                 addToCart: function () {
                     this.cart += 1;
                 }
                }
    });
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
                vColor: 'green',
                vImage: './assets/vmSocks-green-onWhite.jpg'
            },
            {
                vid: 2224,
                vColor: 'blue',
                vImage: './assets/vmSocks-blue-onWhite.jpg'
            }
        ],
        cart: 0,
    },
    methods: {
        addToCart: function () {
            this.cart += 1;
        },
        removeFromCart: function () {
               this.cart -= 1;
        },
        updateProduct: function (vImage) {
            this.image = vImage;
        }
    }
});
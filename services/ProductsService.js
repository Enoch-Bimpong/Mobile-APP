const PRODUCTS = [
    {
        id: 100,
        name: 'Original Rolex Wrist Watch',
        price: 25.00,
        color: "Black",
        size: 41,
        image: require('../assets/products/Original Rolex Wrist Watch.jpg'),
        description: 'For both official and casual wear. '
    },
    {
        id: 101,
        name: 'Original Casio Digital Wrist Watch',
        price: 15.00,
        color: 'Black',
        size: 50,
        image: require('../assets/products/Original Casio Digital Wrist Watch.jpg'),
        description: 'Suitable forFor both official and casual wear.'
    },
    {
        id: 102,
        name: ' Original Hublot Wrist Watch ',
        price: 20.00,
        color: 'Navy-Blue',
        size: 100,
        image: require('../assets/products/Original Hublot Wrist Watch.jpg'),
        description: 'For both official wear.'
    },
    {
        id: 103,
        name: 'Original Gucci Wrist Watch',
        price: 18.00,
        color: 'White & Silver',
        size: 42,
        image: require('../assets/products/Original Gucci Wrist Watch.jpg'),
        description: 'Suitable for numerous events.'
    },
    {
        id: 104,
        name: 'Original Rolex Wrist Watch',
        price: 25.00,
        color: 'Gold',
        size: 41,
        image: require('../assets/products/Original Rolex Wrist Watch1.jpg'),
        description: 'Suitable For both official and casual wear.'
    },
    {
        id: 105,
        name: 'Original Piaget Wrist Watch',
        price: 50.00,
        color: 'Crystals',
        size: 40,
        image: require('../assets/products/Original Piaget Wrist Watch.jpg'),
        description: 'Dazzles at formal event.'
    },
    {
        id: 106,
        name: 'Original Apple iwatch series 6',
        price: 30.00,
        color: 'Red, Cream and Black',
        size: 40,
        image: require('../assets/products/Original Apple iwatch series 6.jpg'),
        description: 'Comfortable and condusive'
    },
    {
        id: 107,
        name: 'Original TAG Heuer Wrist Watch',
        price: 22.00,
        color: 'Dark Grey',
        size: 39,
        image: require('../assets/products/Original TAG Heuer Wrist Watch.jpg'),
        description: 'Suitable For both official and casual wear.'
    },
    {
        id: 108,
        name: 'Original Apple iwatch series 5',
        price: 25.00,
        color: 'Black',
        size: 40.5,
        image: require('../assets/products/Image 8.jpg'),
        description: 'Suitable For both sports and casual wear.'
    },
    {
        id: 109,
        name: 'Original Panerai Wrist Watch',
        price: 40.00,
        color: 'Brown',
        size: 41,
        image: require('../assets/products/Original Panerai Wrist Watch.jpg'),
        description: 'Goes along with all casuals.'
    },
    {
        id: 110,
        name: 'Original Patek Philippe Wrist Watch',
        price: 33.00,
        color: 'Gold',
        size: 41,
        image: require('../assets/products/Original Patek Philippe Wrist Watch.jpg'),
        description: 'Suitable For both official and casual wear'
    },
    {
        id: 111,
        name: 'Original Omega Wrist Watch',
        price: 36.00,
        color: 'Silver',
        size: 41,
        image: require('../assets/products/Original Omega Wrist Watch.jpg'),
        description: 'Suitable For both official and casual wear'
    },
    {
        id: 112,
        name: 'Original Harry Winston Wrist Watch',
        price: 85.00,
        color: 'Royal Queen',
        size: 42,
        image: require('../assets/products/Original Harry Winston Wrist Watch.jpg'),
        description: 'Nice For both official and casual wear'
    },
    {
        id: 113,
        name: 'Original Zenith Wrist Watch',
        price: 40.00,
        color: 'Black and Transparent',
        size: 40,
        image: require('../assets/products/Original Zenith Wrist Watch.jpg'),
        description: 'Nice for both official and casual wear.'
    },
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}
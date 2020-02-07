'use strict';

const faker = require('faker')
const MAX_PRODUCTS_QTY = 30

module.exports = {
    up: (queryInterface) => {
        const products = []
        for (let i = 0; i < MAX_PRODUCTS_QTY; i++) {
            products.push({
                name: faker.commerce.productName(),
                description: faker.lorem.sentence(),
                price: faker.commerce.price(),
                image: faker.random.image()
            })
        }
        return queryInterface.bulkInsert('product', products, {});
    },

    down: (queryInterface) => {
       return queryInterface.bulkDelete('product', null, {});
    }
};

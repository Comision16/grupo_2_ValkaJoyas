"use strict";
const productsJSON = require('../../data/products.json')
const products = productsJSON.map(product => {
  return {
    id : product.id,
    name : product.name,
    description: product.description,
    image1: product.image1,
    image2: product.image2,
    stones: product.stones,
    size: product.size,
    measures_mm: product.measures_mm,
    warranty: product.warranty,
    jewel_keeper: product.jewel_keeper,
    price: product.price,
    discount: product.discount,
    stock: product.stock,
    brandId : product.brand,
    modelId : product.model,
    collectionId : product.collection,
    metalId : product.metal,
    type_stoneId : product.type_stone,
    categoryId : product.category,
    createdAt : new Date,
    updatedAt : new Date
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", products, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};

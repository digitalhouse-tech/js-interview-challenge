'use strict';
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        price: DataTypes.FLOAT,
        image: DataTypes.STRING
    }, {
        timestamps: true,
        underscored: true,
        tableName: 'product'
    });
    Product.associate = function (models) {
        // associations can be defined here
    };
    return Product;
};
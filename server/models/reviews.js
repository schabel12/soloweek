const Sequelize = require("sequelize");
const sequelize = require("../db.js");

const Review = sequelize.define("reviews", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    unique: true
  },
  userInput: Sequelize.TEXT,
  date: Sequelize.DATE,
  productId: Sequelize.INTEGER,
  likeCount: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  dislikeCount: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
});

module.exports = Review;

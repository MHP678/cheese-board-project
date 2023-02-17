const sequelize = require("./db");  
const { DataTypes } = require("sequelize");
const { Board } = require("./board");

const User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
});

User.hasMany(Board);

module.exports = { User };
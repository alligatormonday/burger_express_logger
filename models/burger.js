// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
    all: function (bb) {
        orm.all("burgers", function (res) {
            bb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, bb) {
        orm.create("burgers", cols, vals, function (res) {
            bb(res);
        });
    },
    update: function (objColVals, devoured, bb) {
        orm.update("burgers", objColVals, devoured, function (res) {
            bb(res);
        });
    },
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var user_1 = require("../entities/user");
var products_1 = require("../entities/products");
var purchase_1 = require("../entities/purchase");
var promotion_1 = require("../entities/promotion");
var purchase_details_1 = require("../entities/purchase_details");
exports.default = new typeorm_1.DataSource({
    type: "mysql",
    host: "34.200.105.216",
    port: 3306,
    username: "usuarioapi",
    password: "Password_1",
    database: "webapi",
    entities: [user_1.User, products_1.Products, purchase_1.Purchase, promotion_1.Promotions, purchase_details_1.Purchase_Details],
    synchronize: true,
    logging: false,
});

import {DataSource} from "typeorm"
import { User } from "../entities/user";
import { Products } from "../entities/products";
import { Purchase } from "../entities/purchase";
import { Promotions } from "../entities/promotion";

export default new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username:"root",
    password:"",
    database: "webapi",
    entities: [User, Products,Purchase,Promotions],
    synchronize: true,
    logging: false,
});
import {DataSource} from "typeorm"
import { User } from "../entities/user";
import { Products } from "../entities/products";

export default new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username:"root",
    password:"",
    database: "webapi",
    entities: [User, Products],
    synchronize: true,
    logging: false,
});
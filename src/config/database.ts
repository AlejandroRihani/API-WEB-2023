import {DataSource} from "typeorm"
import { User } from "../entities/user";

export default new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username:"root",
    password:"",
    database: "webapi",
    entities: [User],
    synchronize: true,
    logging: false,
});
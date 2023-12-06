import {NotFound} from "http-errors";
import database from "../config/database";
import { DatabaseRepository, Id, Query } from "../declaration";
import { User } from "../entities/user";
//import { } from "";

export class UserRepository implements DatabaseRepository<User>
{
    
    async create(data: Partial<User>, query?: Query | undefined): Promise<User> {
        const repository = database.getRepository(User);
        const user = repository.create(data);
        await repository.save(user);
        return user;
    }
    async list(query?: Query | undefined): Promise<User[]> {
        const repository = database.getRepository(User);
        return repository.find();
    }
    async get(id: Id, query?: Query | undefined): Promise<User> {
        const repository = database.getRepository(User);

        const user = await repository.findOneBy({ id: id as any });
    
        if (!user) {
            throw new NotFound("User does not exist");
        }
        return user;
    }

    async update(id: Id, data: User, query?: Query | undefined): Promise<User> {
        const repository = database.getRepository(User);
        await repository.update(id,data);
        return this.get(id,query);
    }
    async remove(id: Id, query?: Query | undefined): Promise<User> {
        const repository = database.getRepository(User);
        const user = await this.get(id,query);
        await repository.delete(id);
        return user;
    }
    
}
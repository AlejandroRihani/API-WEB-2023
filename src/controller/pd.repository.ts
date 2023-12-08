import { NotFound } from "http-errors";
import database from "../config/database";
import { DatabaseRepository, Id, Query } from "../declaration";
import { Purchase_Details } from "../entities/purchase_details";
//import { } from "";

export class PDRepository implements DatabaseRepository<Purchase_Details>
{

    async create(data: Partial<Purchase_Details>, query?: Query | undefined): Promise<Purchase_Details> {
        const repository = database.getRepository(Purchase_Details);
        const purchase_details= repository.create(data);
        await repository.save(purchase_details);
        return purchase_details;
    }
    async list(query?: Query | undefined): Promise<Purchase_Details[]> {
        const repository = database.getRepository(Purchase_Details);
        return repository.find();
    }
    async get(id: Id, query?: Query | undefined): Promise<Purchase_Details> {
        const repository = database.getRepository(Purchase_Details);

        const product = await repository.findOneBy({ id: id as any });

        if (!product) {
            throw new NotFound("Product does not exist");
        }
        return product;
    }

    async update(id: Id, data: Purchase_Details, query?: Query | undefined): Promise<Purchase_Details> {
        const repository = database.getRepository(Purchase_Details);
        await repository.update(id, data);
        return this.get(id, query);
    }
    
    async remove(id: Id, query?: Query | undefined): Promise<Purchase_Details> {
        const repository = database.getRepository(Purchase_Details);
        const purchase_details = await this.get(id, query);
        await repository.delete(id);
        return purchase_details;
    }

}


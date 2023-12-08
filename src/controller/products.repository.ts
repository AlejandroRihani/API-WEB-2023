import { NotFound } from "http-errors";
import database from "../config/database";
import { DatabaseRepository, Id, Query } from "../declaration";
import { Products } from '../entities/products';
//import { } from "";

export class ProductRepository implements DatabaseRepository<Products>
{

    async create(data: Partial<Products>, query?: Query | undefined): Promise<Products> {
        const repository = database.getRepository(Products);
        const product = repository.create(data);
        await repository.save(product);
        return product;
    }
    async list(query?: Query | undefined): Promise<Products[]> {
        const repository = database.getRepository(Products);
        return repository.find();
    }
    async get(id: Id, query?: Query | undefined): Promise<Products> {
        const repository = database.getRepository(Products);

        const product = await repository.findOneBy({ id: id as any });

        if (!product) {
            throw new NotFound("Product does not exist");
        }
        return product;
    }

    async update(id: Id, data: Products, query?: Query | undefined): Promise<Products> {
        const repository = database.getRepository(Products);
        await repository.update(id, data);
        return this.get(id, query);
    }
    
    async remove(id: Id, query?: Query | undefined): Promise<Products> {
        const repository = database.getRepository(Products);
        const products = await this.get(id, query);
        await repository.delete(id);
        return products;
    }

}


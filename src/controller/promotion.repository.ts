import { NotFound } from "http-errors";
import database from "../config/database";
import { DatabaseRepository, Id, Query } from "../declaration";
import { Promotions } from '../entities/promotion';
//import { } from "";

export class PromotionRepository implements DatabaseRepository<Promotions>
{

    async create(data: Partial<Promotions>, query?: Query | undefined): Promise<Promotions> {
        const repository = database.getRepository(Promotions);
        const promo = repository.create(data);
        await repository.save(promo);
        return promo;
    }
    async list(query?: Query | undefined): Promise<Promotions[]> {
        const repository = database.getRepository(Promotions);
        return repository.find();
    }
    async get(id: Id, query?: Query | undefined): Promise<Promotions> {
        const repository = database.getRepository(Promotions);

        const promo = await repository.findOneBy({ id: id as any });

        if (!promo) {
            throw new NotFound("Product does not exist");
        }
        return promo;
    }

    async update(id: Id, data: Promotions, query?: Query | undefined): Promise<Promotions> {
        const repository = database.getRepository(Promotions);
        await repository.update(id, data);
        return this.get(id, query);
    }

    async remove(id: Id, query?: Query | undefined): Promise<Promotions> {
        const repository = database.getRepository(Promotions);
        const promo = await this.get(id, query);
        await repository.delete(id);
        return promo;
    }

}


import {NotFound} from "http-errors";
import database from "../config/database";
import { Id, Query } from "../declaration";
import { Purchase } from '../entities/purchase';
import { Purchase_Details } from "../entities/purchase_details";

export class PurchaseRepository implements PurchaseRepository
{
    async create(data: Partial<Purchase>, query?: Query | undefined): Promise<Purchase> {
        const repository = database.getRepository(Purchase);
        const purchase = repository.create(data);
        await repository.save(purchase);
        return purchase;
    }
    async list(query?: Query | undefined): Promise<Purchase[]> {
        const repository = database.getRepository(Purchase);
        return repository.find();
    }
    async get(id: Id, query?: Query | undefined): Promise<Purchase> {
        const repository = database.getRepository(Purchase);

        const purchase = await repository.findOneBy({ id: id as any });
    
        if (!purchase) {
            throw new NotFound("Purchase does not exist");
        }
        return purchase;
    }
}
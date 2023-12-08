import { Request, Response, NextFunction } from "express"
import { DatabaseRepository } from "../declaration";
import { Purchase_Details } from "../entities/purchase_details";

export class PDController {
    constructor(private repository: DatabaseRepository<Purchase_Details>) {

    }


    async create(req: Request, res: Response, next: NextFunction
    ): Promise<void> {
        try {
            const body = req.body;
            const purchase_detail = await this.repository.create(body);

            res.status(200).json(purchase_detail);
        } catch (error) {
            next(error);
        }

    }
    async list(req: Request, res: Response, next: NextFunction
    ): Promise<void> {
        try {
            const purchase_details = await this.repository.list();

            res.status(200).json(purchase_details);
        } catch (error) {
            next(error);
        }
    }
    async get(req: Request, res: Response, next: NextFunction
    ): Promise<void> {
        try {
            const { pdID } = req.params;
            const purchase_detail = await this.repository.get(pdID);
            res.status(200).json(purchase_detail)
        } catch (error) {
            next(error);
        }
    }
    async update(req: Request, res: Response, next: NextFunction
    ): Promise<void> {
        try {
            const { pdID } = req.params;
            const body = req.body;

            const purchase_detail = await this.repository.update(pdID, body);
            res.status(200).json(purchase_detail);
        } catch (error) {
            next(error);

        }
    }
    async remove(req: Request, res: Response, next: NextFunction
    ): Promise<void> {
        try {
            const { pdID } = req.params;
            const purchase_detail = await this.repository.remove(pdID);
            res.status(200).json(purchase_detail)
        } catch (error) {
            next(error);
        }
    }
}
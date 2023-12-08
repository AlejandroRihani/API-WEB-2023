import { Request, Response, NextFunction } from "express"
import { DatabaseRepository } from "../declaration";
import { Promotions } from "../entities/promotion";

export class PromotionController {
    constructor(private repository: DatabaseRepository<Promotions>) {

    }


    async create(req: Request, res: Response, next: NextFunction
    ): Promise<void> {
        try {
            const body = req.body;
            const promo = await this.repository.create(body);

            res.status(200).json(promo);
        } catch (error) {
            next(error);
        }

    }
    async list(req: Request, res: Response, next: NextFunction
    ): Promise<void> {
        try {
            const promo = await this.repository.list();

            res.status(200).json(promo);
        } catch (error) {
            next(error);
        }
    }
    async get(req: Request, res: Response, next: NextFunction
    ): Promise<void> {
        try {
            const { promoId } = req.params;
            const promo = await this.repository.get(promoId);
            res.status(200).json(promo)
        } catch (error) {
            next(error);
        }
    }
    async update(req: Request, res: Response, next: NextFunction
    ): Promise<void> {
        try {
            const { promoId } = req.params;
            const body = req.body;

            const promo = await this.repository.update(promoId, body);
            res.status(200).json(promo);
        } catch (error) {
            next(error);

        }
    }
    async remove(req: Request, res: Response, next: NextFunction
    ): Promise<void> {
        try {
            const { promoId } = req.params;
            const promo = await this.repository.remove(promoId);
            res.status(200).json(promo)
        } catch (error) {
            next(error);
        }
    }
}
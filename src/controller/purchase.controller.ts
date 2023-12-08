import {Request, Response, NextFunction} from "express"
import { PurchaseRepository } from "./purchase.repository";

export class PurchaseController{
    constructor(private repository: PurchaseRepository){

    }
    async create(req:Request,res:Response,next:NextFunction
        ):Promise<void> {
            try{
                const body = req.body;
                const purchase = await this.repository.create(body);

                res.status(200).json(purchase);
            }catch(error){
                next(error);
            }
        
    }
    async list(req:Request,res:Response,next:NextFunction
        ):Promise<void> {
            try{
                const purchases = await this.repository.list();
            
                res.status(200).json(purchases);
            }catch(error){
                next(error);
            }
    }
    async get(req:Request,res:Response,next:NextFunction
        ):Promise<void> {
            try {
                const { purchaseId } = req.params;
                const purchase = await this.repository.get(purchaseId);
                res.status(200).json(purchase)
            } catch (error) {
                next(error);
            }
    }
}
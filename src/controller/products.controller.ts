import {Request, Response, NextFunction} from "express"
import { DatabaseRepository } from "../declaration";
import { Products } from "../entities/products";

export class ProductoController{
    constructor(private repository: DatabaseRepository<Products>){

    }


    async create(req:Request,res:Response,next:NextFunction
        ):Promise<void> {
            try{
                const body = req.body;
                const product = await this.repository.create(body);

                res.status(200).json(product);
            }catch(error){
                next(error);
            }
        
    }
    async list(req:Request,res:Response,next:NextFunction
        ):Promise<void> {
            try{
                const products = await this.repository.list();
            
                res.status(200).json(products);
            }catch(error){
                next(error);
            }
    }
    async get(req:Request,res:Response,next:NextFunction
        ):Promise<void> {
            try {
                const { productId } = req.params;
                const product = await this.repository.get(productId);
                res.status(200).json(product)
            } catch (error) {
                next(error);
            }
    }
    async update(req:Request,res:Response,next:NextFunction
        ):Promise<void> {
        try {
            const { productId } = req.params;
            const body = req.body;
            
            const product = await this.repository.update(productId,body);
            res.status(200).json(product);
        } catch (error) {
            next(error);
            
        }
    }
    async remove(req:Request,res:Response,next:NextFunction
        ):Promise<void> {
        try {
            const {productId} = req.params;
            const product = await this.repository.remove(productId);
            res.status(200).json(product)
        } catch (error) {
            next(error);
        }
    }
}
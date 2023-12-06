import {Request, Response, NextFunction} from "express"
import { DatabaseRepository } from "../declaration";
import { User } from "../entities/user";

export class UsuarioController{
    constructor(private repository: DatabaseRepository<User>){

    }


    async create(req:Request,res:Response,next:NextFunction
        ):Promise<void> {
            try{
                const body = req.body;
                const user = await this.repository.create(body);

                res.status(200).json(user);
            }catch(error){
                next(error);
            }
        
    }
    async list(req:Request,res:Response,next:NextFunction
        ):Promise<void> {
            try{
                const users = await this.repository.list();
            
                res.status(200).json(users);
            }catch(error){
                next(error);
            }
    }
    async get(req:Request,res:Response,next:NextFunction
        ):Promise<void> {
            try {
                const { userId } = req.params;
                const user = await this.repository.get(userId);
                res.status(200).json(user)
            } catch (error) {
                next(error);
            }
    }
    async update(req:Request,res:Response,next:NextFunction
        ):Promise<void> {
        try {
            const { userId } = req.params;
            const body = req.body;
            
            const user = await this.repository.update(userId,body);
            res.status(200).json(user);
        } catch (error) {
            next(error);
            
        }
    }
    async remove(req:Request,res:Response,next:NextFunction
        ):Promise<void> {
        try {
            const {userId} = req.params;
            const user = await this.repository.remove(userId);
            res.status(200).json(user)
        } catch (error) {
            next(error);
        }
    }
}
import {Request, Response, NextFunction} from "express"

export class UsuarioController{



    async create(req:Request,res:Response,next:NextFunction
        ):Promise<void> {
        res.status(200).json({
            message:"create usuarios"
        })
    }
    async list(req:Request,res:Response,next:NextFunction
        ):Promise<void> {
        res.status(200).json({
            message:"list usuarios"
        })
    }
    async get(req:Request,res:Response,next:NextFunction
        ):Promise<void> {
        res.status(200).json({
            message:"get usuario"
        })
    }
    async update(req:Request,res:Response,next:NextFunction
        ):Promise<void> {
        res.status(200).json({
            message:"update usuario"
        })
    }
    async remove(req:Request,res:Response,next:NextFunction
        ):Promise<void> {
        res.status(200).json({
            message:"remove usuario"
        })
    }
}
import express, { Request, Response } from "express";
import { UserStorageGateway } from "./user.storage.gateway";
import { GetAllUsersInteractor } from "../use-cases/get-all-users.interactor";
//Controller (Spring)
export class UserController{
    static async  getAll(req : Request,res: Response) { //no se necesita instancia la clase para acceder al metodo
        try {
            const repository = new UserStorageGateway();// est clase puede comportarse como repositorio
            const interactor = new GetAllUsersInteractor(repository);
            const data = await interactor.execute();
            res.status(200).json({data,error:false})

        } catch (error) {
            console.log(error);
            res.status(400).json({message:'Error'});
        }
    }
}

export const userRouter = express.Router();
userRouter.get('/',[],UserController.getAll);
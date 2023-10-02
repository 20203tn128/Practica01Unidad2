import { UseCase } from "../../../kernel/contract";
import { TUser } from "../entities/user";
import { IUserRepository } from "./ports/user.repository";

// SERVICE (SPRING)
export class GetAllUsersInteractor implements UseCase<void,TUser[]> {
    constructor(private readonly repository:IUserRepository){} // cada caso de uso solo va a concer los metodos que hay en ese modulo
     async execute(payload?: void | undefined): Promise<TUser[]> {
        return await this.repository.findAll();
    };

}
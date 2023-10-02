import { Entity, TStatus } from "kernel/types";

export type TPerson = Entity<number> & {
    name:string;
    surname:string;
    lastname?:string; // para indicar que pueden ser opcionales
    birthday?:string;
    createdAt?:string;
    curp?:string;
    rfc?:string;
    status?:TStatus;

};
export type Entity<Id extends number | string>={
    id:Id;
};

export type TPagination ={
    orderBy?:string;
    page?:number;
    offset?:number;
    limit?:number;
    order?:string;
    filter:string; // ell texto por el cual se van a filtrar todos los datos

};

export type JSON = {
    [x:string]:any;
};

export type JSONArray = JSON[];

export type TStatus =Entity<number> &{
    description?: string;
};

export enum Error{
    MISSING_FILEDS = 'MissingFields',
    RECORD_NOT_REGISTERED = 'RecordNoRegistered',
    RECORD_NOT_UPDATED = 'RecordNotUpdated',
    NO_DATA_FOUND = 'NoDataFound',
    CREDENTIALS_MISMATCH = 'CredentialsMismatch',
    UNAUTHORIZED ='Unauthorized',

}
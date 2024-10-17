import {IReactionPostModals} from "./IReactionPostModals";

export interface IPost {
    id:number;
    title:string;
    body:string;
    tags:string[];
    reactions:IReactionPostModals;
    views:number;
    userId:number;
}
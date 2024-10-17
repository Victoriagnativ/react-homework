import {IPost} from "./IPost";


export interface IResponsePostModal{

    posts: IPost[],
    skip: number,
    limit: number,
    total: number

}

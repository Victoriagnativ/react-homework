//import {IResponseUsersModel} from "../modals/IResponseUserModel";
//import {IResponsePostModal} from "../modals/IResponsePostModal";


//export const getUsers = async ():Promise<IResponseUsersModel>=>{
//    let response:IResponseUsersModel= await fetch('https://dummyjson.com/users')
      //  .then(value => value.json());
    //return response;
//}
//export const getPosts = async (id: number):Promise<IResponsePostModal>=>{
   // let response= fetch('https://dummyjson.com/posts/user/' + id)
       // .then(value =>value.json())
   // return response;
///}

import axios, {AxiosResponse} from 'axios';
import {IResponseUsersModel} from "../modals/IResponseUserModel";
import {IResponsePostModal} from "../modals/IResponsePostModal";



let axiosInstance = axios.create({
    baseURL:'https://dummyjson.com',
    headers:{"Content-Type":"application/json"}
});
   export const getUsers = ():Promise<AxiosResponse<IResponseUsersModel>> =>{
       return axiosInstance.get('/users');
 }
// export const getPosts = (id:number):Promise<AxiosResponse<IResponseUsersModel>> =>{
//     return axiosInstance.get('/user/' + id);
// }
export const getPosts = async (id: number): Promise<IResponsePostModal> => {
    const { data } = await axiosInstance.get(`/posts/user/`+ id);
    return data;
};
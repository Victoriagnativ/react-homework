import {IAddressUserModel} from "./IAddressUserModel";
import {IBankUserModel} from "./IBankUserModel";
import {ICompanyUserModal} from "./ICompanyUserModal";
import {ICryptoUserModel} from "./ICryptoUserModel";
import {IHairUserModel} from "./IHairUserModel";

export interface IUser {
    address: IAddressUserModel;
    age:number;
    bank:IBankUserModel;
    birthDate:string;
    bloodGroup:string;
    company:ICompanyUserModal;
    crypto:ICryptoUserModel;
    ein:string;
    email:string;
    eyeColor:string;
    firstName:string;
    gender:string;
    hair:IHairUserModel;
    height:number;
    id:number;
    image:string;
    ip:string;
    lastName:string;
    macAddress:string;
    maidenName:string;
    password:string;
    phone:string;
    role:string;
    ssn:string;
    university:string;
    userAgent:string;
    username:string;
    weight:number;







}


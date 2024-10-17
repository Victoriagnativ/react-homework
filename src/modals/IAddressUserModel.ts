import {ICoordinates} from "./ICoordinates";

export interface IAddressUserModel{
    address:string;
    city:string;
    coordinates:ICoordinates;
    country:string;
    postalCode:string;
    state:string;
    stateCode:string;
}
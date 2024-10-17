import {ICoordinates} from "./ICoordinates";

export interface ICompanyAddress{
    address:string;
    city:string;
    coordinates:ICoordinates;
    country:string;
    postalCode:string;
    state:string;
    stateCode:string;
}
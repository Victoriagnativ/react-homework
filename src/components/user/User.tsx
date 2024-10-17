import React, {FC} from 'react';
import {IUser} from "../../modals/IUser";
type IUserProps={
    item:IUser;
    lift:(id: number)=>void;
}
const User:FC<IUserProps> = ({item,lift}) => {
    return (

        <div key={item.id}>{item.id}-{item.firstName}
            <button onClick={() => {
                lift(item.id);
            }}>
                chosen
            </button>
        </div>
    );
};

export default User;
import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../modals/IUser";
import User from "../user/User";
import {getUsers} from "../../services/api.service";
type IUserProps = {
    lift:(id: number)=> void
}

const Users:FC<IUserProps> = ({lift}) => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(()=>{
             // fetch('https://dummyjson.com/users')
             //     .then(value => value.json())
             getUsers()
                 .then(response =>{
                  console.log(response);
                setUsers(response.data.users);
                     console.log(response.data.users);
            })
    },[]);
    return (
        <div>
            {
                users.map(value => <User lift ={lift} item={value} key={value.id}/>)
            }
        </div>
    );
};

export default Users;
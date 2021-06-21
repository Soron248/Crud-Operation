import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
export const UserContext = createContext();
export const UserProvider = (props)=>{
    const [users, setUsers] = useState([
        {id:1,name:"Soron",position:"Senior Dev",salary:"100000"},
        {id:2,name:"Nishat",position:"junior Dev",salary:"80000"},
        {id:3,name:"Anik",position:"Designer",salary:"60000"}
    ]);
    return(
        <UserContext.Provider value={[users,setUsers]}>
            {props.children}
        </UserContext.Provider>
    )
}
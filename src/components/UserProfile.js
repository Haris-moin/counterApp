import React from 'react'

const UserProfile = ({user}) => {
    const {name,disc,intres_fields} = user;
    console.log("intres_field" ,intres_fields)
    return (
        <div>
            <h1>Name:{name}</h1>
            <p>Discription:{disc}</p>
            <ul>
             {intres_fields.map((field) => {
                 return (<li >{field}</li>)
               })} 
            </ul>
        </div>
    )
}

export default UserProfile

import React from 'react'
import {NavLink} from 'react-router-dom' 

const UserItem = (props) => {

    const selectPost = () => {
        props.selectPost(props.uItem.id)
    }
    return <div style = {{padding : "15px"}}>
        <div>
            <NavLink to = "/posts">
            <button onClick = {selectPost}>
                Show Posts
            </button>
            </NavLink>
        </div>
        <div>
            <b>Address : </b>{props.uItem.address.city}, {props.uItem.address.street}, {props.uItem.address.suite}
        </div>
        <div>
            <div>
                <b>Company name : </b>{props.uItem.company.name}
            </div>
            <div>
                <b>Sphere : </b>{props.uItem.company.bs}
            </div>
            <div>
                <b>Position : </b>{props.uItem.company.catchPhrase}
            </div>
        </div>
        <div>
            <div><b>Name : </b>{props.uItem.name}</div>
            <div><b>Username : </b> {props.uItem.username}</div>
            <div><b>Phone number : </b> {props.uItem.username}</div>
            <div><b>Website : </b> {props.uItem.website}</div>
        </div>
        {props.num !== props.uItem.length - 1 && 
        <div>
            ________________________________________________________________________
        </div>
        }
    </div>
}

export default UserItem
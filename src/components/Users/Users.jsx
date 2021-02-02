import React from 'react'
import UserItem from './UserItem/UserItem'
import FetchingImage from '../../common/images/kto-pridumal-indikator-vypolneniya-7.gif'
import s from './Users.module.css'

const Users = (props) => {
    const users = props.usersList.map((obj, arrayIndex) => <UserItem selectPost={props.selectPost}
        uItem={obj} key={arrayIndex} />)
    return <div>
        {props.isFetching
            ? <img src={FetchingImage} alt="" />
            : <div className = {s.usersWrapper}>
                {users}
            </div>
        }
    </div>
}

export default Users
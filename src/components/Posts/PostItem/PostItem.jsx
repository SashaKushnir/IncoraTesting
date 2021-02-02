import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './PostItem.module.css'

const PostItem = (props) => {

    return <div className={s.postItemWrapper}>
        <div></div>
        <div>
            <b>Post {props.num + 1}</b>
            <div>
                <NavLink to="/post">
                    <button onClick={() => props.setPostInfo(props.pItem)}>
                        Details
                     </button>
                </NavLink>
            </div>
        </div>
        <div>
            <b>Title : {props.pItem.title}</b>
        </div>
        <div>
            <b>Body : </b>{props.pItem.body}
        </div>

    </div>
}

export default PostItem
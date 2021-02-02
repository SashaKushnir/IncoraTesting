import React from 'react'
import s from './CommentItem.module.css' 
const CommentItem = (props) => {
    return <div className = {s.commentsWrapper}>
        <div>
            <b>Comment name : </b> 
            <div>{props.cItem.name}</div>
        </div>
        <div style = {{paddingLeft:"25px"}}>
            <b>Comment sender : </b>
            <div>
                {props.cItem.email}
            </div>
        </div>
        <div>
            <b>Comment body : </b>
            <div>
                {props.cItem.body}
            </div>
        </div>
    </div>
}

export default CommentItem
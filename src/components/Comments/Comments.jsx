import React, { useState } from 'react'
import FetchingImage from '../../common/images/kto-pridumal-indikator-vypolneniya-7.gif'
import CommentItem from './CommentItem/CommentItem'
import EditModeComponent from './Modes/EditModeComponent'
import NoEditModeComponent from './Modes/NoEditModeComponent'
import s from './Comments.module.css'

const Comments = (props) => {
    let comments = props.commentsList.map((comItem, arrayIndex) => <CommentItem
        arrayIndex={arrayIndex} cItem={comItem} key={arrayIndex} />).reverse()
    let [editMode, setEditMode] = useState(false)

    const onEditClick = () => {
        setEditMode(true)
    }
    const cancelEditMode = () => {
        setEditMode(false)
    }
    const setEdits = (editFormObj) => {
        editFormObj["id"] = props.currentPost.id
        editFormObj["userId"] = props.currentPost.userId
        props.editPost(editFormObj)
        setEditMode(false)
    }
    const onDeleteClick = () => {
        props.deletePost(props.currentPost.id)
    }

    if(props.isFetching)
        return <img src={FetchingImage} alt="Fetching"/>
    return <div className = {s.padMe}>
        <div>
            {!editMode &&
                <NoEditModeComponent currentPost = {props.currentPost}
                onEditClick = {onEditClick} onDeleteClick = {onDeleteClick} />
            }
            {editMode &&
                <EditModeComponent currentPost = {props.currentPost} 
                setEdits = {setEdits} cancelEditMode = {cancelEditMode} />
            }
        </div>
        {comments}
    </div>
}

export default Comments
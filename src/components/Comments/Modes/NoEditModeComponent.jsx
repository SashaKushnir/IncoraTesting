
import React from 'react'
import { NavLink } from "react-router-dom";

const NoEditModeComponent = ({currentPost, onEditClick, onDeleteClick}) => {
  return <div>
  <div>
      <b>Title : {currentPost.title}</b>
  </div>
  <div>
      <b>Body : </b>{currentPost.body}
  </div>
  <div>
      <button onClick={onEditClick}>
          Edit post
      </button>
      <NavLink to = 'posts'>
          <button onClick = {onDeleteClick}>
              Delete post
          </button>
      </NavLink>
  </div>
</div>
}
export default NoEditModeComponent
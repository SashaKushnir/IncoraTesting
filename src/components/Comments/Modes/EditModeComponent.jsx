import PostFormComponent from "../../../common/commonComponents/FillForm";
import React from 'react'

const EditModeComponent = ({setEdits, cancelEditMode, currentPost}) => {
  return <div>
   <PostFormComponent initialValues = {currentPost} onSubmit={setEdits} />
   <button onClick={cancelEditMode}>
       Cancel
       </button>
   </div>
}
export default EditModeComponent
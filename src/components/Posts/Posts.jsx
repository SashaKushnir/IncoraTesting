import React from 'react'
import PostItem from './PostItem/PostItem'
import FetchingImage from '../../common/images/kto-pridumal-indikator-vypolneniya-7.gif'
import PostFormComponent from '../../common/commonComponents/FillForm'

const Posts = (props) => {
    let postsList = props.postsList.map((obj, postsListIndex) => <PostItem num={postsListIndex}
        pItem={obj} key={postsListIndex} setPostInfo = {props.setPostInfo} />)
        .reverse()

    const makePost = (formValue) => {
        console.log(formValue)
        formValue["userId"] = props.localPostUserId
        props.sendPostForm(formValue)
    }
    return <div style={{ padding: "15px" }}>
        {props.isFetching
            ? <img src={FetchingImage} alt="Loading..." />
            : <div>
                {!props.toShowForm && <div>
                    <button onClick={() => props.showFormToggle(true)}>
                        Add post
                    </button>
                </div>}
                {props.toShowForm &&
                    <div>
                        <PostFormComponent onSubmit={makePost} />
                        <button onClick = {() => props.showFormToggle(false)}>
                            Cancel
                        </button>
                    </div>
                }
                {postsList}
            </div>
        }
    </div>
}


export default Posts


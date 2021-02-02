import React from 'react'
import {connect} from 'react-redux' 
import {compose} from 'redux' 
import Posts from './Posts'
import {setPostsByUserId, showFormToggle, sendPostForm } from '../../Redux/postsReducer'
import { gettingPostIdForComments, setPostInfo } from '../../Redux/postReducer'

class PostsContainer extends React.PureComponent {
    componentDidMount = () => {
        this.props.setPostsByUserId(this.props.selectedPost)
    }
    render() {
        return <Posts {...this.props}/>
    }
}

const mstp = (state) => {
    return {
        postsList : state.posts.postsList,
        selectedPost : state.posts.selectedPost,
        isFetching : state.posts.isFetching,
        toShowForm : state.posts.toShowForm,
        localPostUserId: state.posts.localPostUserId 
    }
}
export default compose(  
connect(mstp, {setPostsByUserId, showFormToggle, sendPostForm, gettingPostIdForComments,
    setPostInfo })
)
(PostsContainer) 



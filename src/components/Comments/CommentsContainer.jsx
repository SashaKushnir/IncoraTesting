import React from 'react'
import {connect} from 'react-redux' 
import {compose} from 'redux' 
import Comments from './Comments'
import {setPostInfo, editPost, deletePost} from '../../Redux/postReducer'

class PostsContainer extends React.PureComponent {
    componentDidMount = () => {
        //this.props.setPostInfo(this.props.needPostId)
    }
    render() {
        return <Comments {...this.props}/>
    }
}

const mstp = (state) => {
    return {
        commentsList : state.post.commentsList,
        currentPost : state.post.currentPost,
        isFetching :  state.post.isFetching 
    }
}
export default compose(  
connect(mstp, {setPostInfo, editPost, deletePost})
)
(PostsContainer) 



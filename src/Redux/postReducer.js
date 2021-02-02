import { comments, posts } from "../DAL/api"
import { removeInAllPosts } from "./postsReducer"

const SETTING_POSR_ID = "postReducer_SETTING_POSR_ID"
const SETTING_COMMENT_LIST = "postReducer_SETTING_COMMENT_LIST"
const SETTING_CURRENT_POST = "postReducer_SETTING_CURRENT_POST"
const MAYBE_FETCH = "postReducer_MAYBE_FETCH"
const REMOVE_POST = "postReducer_REMOVE_POST"

const initialState = {
    needPostId : null,
    commentsList : [],
    currentPost : {},
    isFetching : false
}
const postInfoReducer = (postInfo = initialState, action)  => {
    switch (action.type) {
        case SETTING_POSR_ID : 
            return {
                ...postInfo,
                needPostId : action.postId
            }
        case SETTING_COMMENT_LIST : 
             return {
                 ...postInfo,
                 commentsList : [...action.comList]
             }
        case SETTING_CURRENT_POST : 
            return {
                ...postInfo,
                currentPost : {...action.currentPost}
            }

        case MAYBE_FETCH: 
            return {
                ...postInfo,
                isFetching : action.status
            }
        case REMOVE_POST : 
            return {
                ...postInfo,
                commentsList : [''],
                currentPost : {}
            }
        default:
            return postInfo
    }
}

export const setPostInfo = (postObj) => async (dispatch) => {
    try {
        dispatch(fetchAC(true))
        let response = await comments.getUserPostsAPI(postObj.id)
        if (response.statusText === "") {
            dispatch(setCommentListAK(response.data))
            dispatch(setCurrentPostAK(postObj))
        }
        else
            console.warn("something went wrong")
        dispatch(fetchAC(false))
    } catch (error) {
        alert(error.message)
    }
}

export const editPost = (newPostObj) => async (dispatch) => {
    try {
        dispatch(fetchAC(true))
        const response = await posts.putUserPostsAPI(newPostObj.id, newPostObj)
        if (response.statusText === "")
            dispatch(setCurrentPostAK(response.data))
        else
            console.warn("Something went wrong")
        dispatch(fetchAC(false))
    } catch (error) {
        alert(error.message)
    }
} 

export const deletePost = (postId) => async (dispatch) => {
    dispatch(fetchAC(true))
    try {
        let response = await posts.deleteUserPostsAPI(postId)
        if (response.statusText === "") {
            dispatch(removePostAC(postId))
            dispatch(removeInAllPosts(postId)) //Immitating deleting post 
            //If remove twice get requst will renew previous deleting
            //It's just for visual effect  |  alert is better
            //As for put req situation is the same, I decided not to do the same cause It's stupid and cause bags If put twice
            //alert(`Current post has been successfully removed with statusCode${response.status}`)
        }
        console.log(response)
        dispatch(fetchAC(false))
    } catch (error) {
        alert(error.message)
    }
    
}
const removePostAC = (postId) => ({type : REMOVE_POST, postId})
const setCommentListAK = (comList) => ({type : SETTING_COMMENT_LIST, comList})
const setCurrentPostAK = (currentPost) => ({type : SETTING_CURRENT_POST, currentPost})
const fetchAC = (status) => ({type : MAYBE_FETCH, status})

export const gettingPostIdForComments = (postId) => ({type : SETTING_POSR_ID, postId})
export default postInfoReducer

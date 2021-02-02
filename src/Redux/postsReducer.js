import { posts } from "../DAL/api"

const SETTING_POST_BYUSER_ID = "postsReducer_SETTING_POST_BYUSER_ID"
const SELECT_POSTS_BY_USER = "postsReducer_SELECT_POSTS_BY_USER"
const FETCH_OR_NOT = "postsReducer_FETCH_OR_NOT"
const SHOWING_FORM = "postsReducer_SHOWING_FORM"
const LOCAL_USEID_SET = "postsReducer_LOCAL_USEID_SET"
const PUSH_POST = "postsReducer_PUSH_POST"
const REMOVE_POST_BY_ITS_ID = "postsReducer_REMOVE_POST_BY_ITS_ID"

const initialState = {
    postsList : [],
    selectedPost : null,
    isFetching : false,
    toShowForm : false,
    localPostUserId : null
}

const postsInfoReducer = (postsInfo = initialState, action)  => {
    switch (action.type) {
        case SETTING_POST_BYUSER_ID :
            return {
                ...postsInfo,
                postsList : [...action.pList],
            }
        case SELECT_POSTS_BY_USER  : 
            return {
                ...postsInfo,
                selectedPost : action.userId
            }
            
        case FETCH_OR_NOT  : 
            return {
                ...postsInfo,
                isFetching : action.fetchStatus
            }

        case SHOWING_FORM : 
            return {
                ...postsInfo,
                toShowForm : action.shForm
            }
        case LOCAL_USEID_SET: 
            return {
                ...postsInfo,
                localPostUserId: action.userId
            }

        case PUSH_POST : 
            return {
                ...postsInfo,
                postsList : [...postsInfo.postsList,
                        action.addedPost
                ] 
            } 
        
        case REMOVE_POST_BY_ITS_ID : 
            return {
                ...postsInfo,
                postsList : [...postsInfo.postsList.filter(val => val.id !== action.delPostId)]
            }

        default:
            return postsInfo
    }
}

const setPostsByUserIdAC = (pList) => ({type : SETTING_POST_BYUSER_ID, pList})

const localUserIdSetAC = (userId) => ({type : LOCAL_USEID_SET, userId })

export const setPostsByUserId = (userId) => async (dispatch) => {
    try {
          dispatch(isFetch(true))
    let response = await posts.getUserPostsAPI(userId)
    if(response.statusText === ''){
        dispatch(localUserIdSetAC(userId))
        dispatch(setPostsByUserIdAC(response.data))
    }
    else 
        console.warn("Something went wrong")
    dispatch(isFetch(false)) 
    } catch (error) {
        alert(error.message)
    }
}

const addPostAC = (addedPost) => ({type : PUSH_POST, addedPost})

export const sendPostForm = (formObj, usId) => async (dispatch) => {
    try {
        const response = await posts.postUserPostsAPI()
        dispatch(isFetch(true))
        if (response.statusText === "") {
            formObj.id = response.data.id
            dispatch(addPostAC(formObj))
        }
        else
            console.warn("Something went wrong")
        dispatch(isFetch(false))
    } catch (error) {
        alert(error.message)
    }
}

export const selectPost = (userId) => ({type : SELECT_POSTS_BY_USER, userId})

const isFetch = (fetchStatus) => ({type : FETCH_OR_NOT, fetchStatus})

export const showFormToggle = (shForm) => ({type : SHOWING_FORM, shForm})

export const removeInAllPosts = (delPostId) => ({type : REMOVE_POST_BY_ITS_ID, delPostId})

export default postsInfoReducer

import axios from 'axios'
const BaseUrl = "https://jsonplaceholder.typicode.com/"

//users
export const users = {
    getUsersAPI : () => {
        return axios.get(`${BaseUrl}users`)
    }
} 
export const posts = {
    getUserPostsAPI : (userID) => {
        return axios.get(`${BaseUrl}posts?userId=${userID}`)
    },
    postUserPostsAPI : (formObj) => {
        return axios.post(`${BaseUrl}posts`,formObj)
    },
    putUserPostsAPI : (num, newPostObj) => {
        return axios.put(`${BaseUrl}posts/${num}`, newPostObj)
    },
    deleteUserPostsAPI : (num) => {
        return axios.delete(`${BaseUrl}posts/${num}`)
    },
} 

export const comments = {
    getUserPostsAPI : (postId) => {
        return axios.get(`${BaseUrl}comments?postId=${postId}`)
    }
} 
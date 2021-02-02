import { users } from "../DAL/api"

const SET_USERS_ARRAY = "usersReducer_SET_USERS_ARRAY"
const TO_FETCH = "usersReducer_TO_FETCH"

const initialState = {
    usersList : [],
    isFetching : false
}

const usersInfoReducer = (usersInfo = initialState, action)  => {
    switch (action.type) {
        case SET_USERS_ARRAY:
            return {
                ...usersInfo,
                usersList: [...action.respArray]
            }
        case TO_FETCH :
            return {
                ...usersInfo,
                isFetching : action.status 
            } 
        default:
            return usersInfo
    }
}
const setUsersToReducer = (respArray) =>({type : SET_USERS_ARRAY, respArray})
export const setUsers = () => async (dispatch) => {
    try {
        dispatch(toFetchToggle(true))
        let response = await users.getUsersAPI()
        console.log(response)
        if (response.statusText === "")
            dispatch(setUsersToReducer(response.data))
        dispatch(toFetchToggle(false))
    } catch (error) {
        alert(error.message)
    }
}
const toFetchToggle = (status) => ({type : TO_FETCH, status})
export default usersInfoReducer

import {applyMiddleware, combineReducers, createStore, compose} from "redux"

import thunkMW from 'redux-thunk'
import postInfoReducer from "./postReducer";
import postsInfoReducer from "./postsReducer";
import usersInfoReducer from "./usersReducer";
import {reducer as formReducer} from 'redux-form'

let reducersList = combineReducers({
    users : usersInfoReducer,
    posts : postsInfoReducer,
    post : postInfoReducer,
    form : formReducer
}) 

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunkMW)
);
let store = createStore(reducersList, enhancer)

export default store
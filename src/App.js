import './App.css';
import Users from './components/Users/UsersContainer ';
import Posts from './components/Posts/PostsContainer';
import Comments from './components/Comments/CommentsContainer';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import React from 'react'

class App extends React.Component {
  catchUnhandledErrors = (reason, promiseRejectionEvent) => {
    alert("Something went wrong")
    console.error(promiseRejectionEvent)
    console.error(reason)
  }
  componentDidMount = () => {
    window.addEventListener("unhandlerejection", this.catchUnhandledErrors)
  }
  componentWillUnmount = () => {
    window.removeEventListener("unhandlerejection", this.catchUnhandledErrors)
  }
  render (){
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        
        <Redirect exact from = "/" to = "/users" />
        <Route path = "/posts" render = {() => <Posts />} />
        <Route path = "/post" render = {() => <Comments />} />
        <Route path = "/users" render = {() => <Users />} />
        <Route path = "*" render = {() => <div>Something went wrong</div>} />
      </Switch>
    </div>
    </BrowserRouter>
  );
  }
}
export default App;

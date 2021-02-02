import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Users from './Users'
import {setUsers} from '../../Redux/usersReducer'
import {selectPost} from '../../Redux/postsReducer'

class UsersContainer extends React.PureComponent {
    componentDidMount = () => {
        this.props.setUsers()
    }
    render(){
        return <Users {...this.props}/>
    }
}

const mstp = (state) => {
    return {
        usersList : state.users.usersList,
        isFetching : state.users.isFetching
    }
}
export default compose(
    connect(mstp, {setUsers, selectPost})
)(UsersContainer)
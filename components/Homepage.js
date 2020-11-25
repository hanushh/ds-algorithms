import React, { Component } from 'react'
import UserContext from './UserContext'

export default class HomePage extends Component {

    static contextType = UserContext

    componentDidMount() {
        const user = this.context

        console.log(user) // { name: 'Tania', loggedIn: true }
    }

    render() {
        const {user, setUser} = this.context
        console.log(setUser)
        return <span >{user?.name}</span>
    }
}

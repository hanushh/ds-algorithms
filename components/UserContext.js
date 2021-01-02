import React from 'react'

const UserContext = React.createContext()

// export const UserProvider = UserContext.Provider; 
export const UserConsumer = UserContext.Consumer;


export class UserProvider extends React.Component {
    state = { user: {} }

    setUser = user => {
        this.setState(prevState => ({ user }));
    }
    render() {
        const user = this.state.user;
        const setUser = this.setUser;
        return (<UserContext.Provider value={user, setUser}>
            {this.props.children}
        </UserContext.Provider>)
    }
}


export default UserContext; 

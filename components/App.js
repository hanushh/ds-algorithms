import React from 'react';
import { UserProvider } from './UserContext'
import HomePage from './Homepage'


export default function App() {
    const user = { name: 'Tania', loggedIn: true }

    return (
        <UserProvider value={user}>
            <HomePage />
        </UserProvider>
    )
}

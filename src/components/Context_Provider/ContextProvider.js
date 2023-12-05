import React from 'react';
import { createContext } from 'react'

const UserContext = createContext();

export default function App() {
    return (
        <UserContext.Provider value="Reed">
            <User />
        </UserContext.Provider>
    )
}

function User() {
    return (
        <UserContext.Consumer>
            {value => <h1>{value}</h1>}
            {/* prints: Reed */}
        </UserContext.Consumer>
    )
}
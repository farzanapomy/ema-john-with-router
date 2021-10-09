import React, { createContext } from 'react';

export const AuthContext = createContext()

const AuthPorvider = ({ children }) => {
    // const { children } = props
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthPorvider;
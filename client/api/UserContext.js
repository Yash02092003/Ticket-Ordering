// api/UserContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children, initialUser }) => {
    const [user, setUser] = useState(initialUser);

    const signOut = () => {
        setUser(null);  // Sign out logic (clear user)
    };

    const signIn = (userData) => {
        setUser(userData);  // Set user after sign-in
    };

    return (
        <UserContext.Provider value={{ user, signOut, signIn }}>
            {children}
        </UserContext.Provider>
    );
};

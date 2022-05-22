import { createContext } from 'react';

//This context will determine if a user has logged in
export const AuthContext = createContext({ isLoggedIn: false, login: () => {}, logout: () => {}})
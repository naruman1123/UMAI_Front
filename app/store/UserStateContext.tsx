'use client';
import React, {createContext, useReducer, ReactNode, useContext } from 'react';
import { UserState, UserStateReducer, initialState} from '@/app/store/UserStateReducer'
import { UserStateAction } from '../types/types';

//UserStateContextをcreateContext定義

export const UserStateContext = createContext({} as {
  state: UserState;
  dispatch: React.Dispatch<UserStateAction>;
});;

//UserStateContextのProvideer
export const UserStateProvider= ({children}: { children: ReactNode}) => {
  const [state, dispatch] = useReducer(UserStateReducer,initialState)
  return (
    <UserStateContext.Provider value={{state,dispatch}}> 
     {children}
    </UserStateContext.Provider>
  );
};

//UserStateContextの利用
export const UserStateUse = () => {
  const UserData = useContext(UserStateContext);
  if (UserData === null)
    throw new Error("Function 'useCounter' must be used in Provider.");
  return UserData;
};
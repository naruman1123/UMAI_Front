'use client';
import { UserStateAction } from "../types/types";
import { useReducer } from "react";
//UserAuthState（id）の定義
//{ id: string | null }: この型が持つプロパティは、id という名前のもので、その型は string または null
export type UserState = {
    id: string | null
    Name:string | null
  };
  
 
  export const initialState: UserState = {id: null, Name: null};

  //「userAuthReducer」というreducer関数の定義
  export const UserStateReducer = (state: UserState, action: UserStateAction): UserState => {
    switch (action.type) {
      case 'setData'://「setId」なら引数payloadをUserAuthActionのidに代入
        return {
          ...state,
          id: action.payload
        };
      case 'setName'://「removed」ならUserAuthActionのidに「null」を代入
        return {
          ...state,
          Name: action.payload
        };  
      case 'removeId'://「removed」ならUserAuthActionのidに「null」を代入
        return {
          ...state,
          id: null,
          Name: null
        };            
      default:
        return {
          ...state,
        };
    }
  }

   
 
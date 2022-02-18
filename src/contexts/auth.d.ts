import React from 'react';
import { IUserProps } from '../@types/user';

interface IAuthProps {
   signed:boolean, 
   user:IUserProps | null, 
   setUser:React.Dispatch<React.SetStateAction<IUserProps | null >>;
   loading:boolean;
   signIn:()=>Promise<void>,
   signOut:()=>void,
}

interface IAuthResponse {
    type:string;
    params:{
        access_token:string;
    }
}

export { IAuthProps, IAuthResponse };



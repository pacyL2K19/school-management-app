import axios from 'axios'
import { Dispatch } from 'react'
import { BASE_URL } from '../../utils'
import AsyncStorage from '@react-native-community/async-storage'


export interface UserLoginAction{
    readonly type: 'ON_USER_LOGIN' | 'ON_USER_ERROR',
    payload: string
}

export type UserAction = UserLoginAction;


export const OnUserLogin = (email: string, password: string) => {
 
    return async ( dispatch: Dispatch<UserAction>) => {

        try {
             const response = await axios.post<string>(`${BASE_URL}user/login`, {
                email,
                password
            })

            console.log(response)

            if(!response){
                dispatch({
                    type: 'ON_USER_ERROR',
                    payload: 'Login Error'
                })
            }else{
                dispatch({
                    type: 'ON_USER_LOGIN',
                    payload: response.data
                })
            }
        } catch (error) {
            dispatch({
                type: 'ON_USER_ERROR',
                payload: 'Login Error'
            })
        }
    }

}

export const OnUserSignup = (email: string, phone: string ,password: string) => {
 
    return async ( dispatch: Dispatch<UserAction>) => {

        try {
             const response = await axios.post<string>(`${BASE_URL}user/signup`, {
                email,
                phone,
                password
            })

            console.log(response)

            if(!response){
                dispatch({
                    type: 'ON_USER_ERROR',
                    payload: 'Login Error'
                })
            }else{
                dispatch({
                    type: 'ON_USER_LOGIN',
                    payload: response.data
                })
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: 'ON_USER_ERROR',
                payload: 'Login Error'
            })
        }
    }

}





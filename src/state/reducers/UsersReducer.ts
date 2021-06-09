import {usersAPI} from "../../api/api";
import {Dispatch} from "redux";

const usersInitialState = {
    userName: '', 
    min: 1, 
    max: 1, 
    page: 1, 
    pageCount: 1,
    loading: false,
    error: null,
}

export const usersReducer = (state: UsersInitialState = usersInitialState, action: ActionType): UsersInitialState => {
    switch (action.type) {
        case "USERS/FETCH_USERS":
            return {
                ...state,
                loading: true,
                error: action.error,
            }
        case "USERS/FETCH_USERS_ERROR":
            return {
                ...state,
                loading: false,
                error: null,
            }
        case "USERS/GET_USERS":
            return {
                ...state, 
                userName: action.userName, 
                min: action.min, 
                max: action.max, 
                page: action.page, 
                pageCount: action.pageCount,
                loading: false,
                error: null,
            }
        default:
            return state;
    }
}

//Action
export const getUsersAC = (userName: string, min: number, max: number, page: number, pageCount: number) => (
    {type: "USERS/GET_USERS", userName, min, max, page, pageCount} as const);
export const fetchUsersAC = (loading: boolean, error: null) => (
    {type: "USERS/FETCH_USERS", loading, error} as const);
export const fetchUsersErrorAC = (loading: boolean, error: string) => (
    {type: "USERS/FETCH_USERS_ERROR", loading, error} as const);

//TC    
export const usersTC = (userName: string, min: number, max: number, page: number, pageCount: number) => (dispatch: Dispatch) => {
    return usersAPI.getUsers(userName, min, max, page, pageCount)
        .then((res) => {
            debugger
        })
        .catch((error) => alert(error))
}

// Type
export type UsersInitialState = typeof usersInitialState
export type ActionType = GetUsers | FetchUsers | FetchUsersError

export type GetUsers = ReturnType<typeof getUsersAC>
export type FetchUsers = ReturnType<typeof fetchUsersAC>
export type FetchUsersError = ReturnType<typeof fetchUsersErrorAC>
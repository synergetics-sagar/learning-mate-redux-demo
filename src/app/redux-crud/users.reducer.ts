import { createReducer, on } from "@ngrx/store";
import { User } from "./user";
import { fetchUsers, fetchUsersError, fetchUsersSuccess, remove, submit } from "./users.actions";

export const initialState: { users: User[] } = {
    users: []
}

export const usersReducer = createReducer(
    initialState,
    on(fetchUsers, (state)=>{
        return {
            loading: true,
            ...state
        }
    }),
    on(fetchUsersSuccess, (state, {users})=>{
        console.log("Success")
        return {
            ...state,
            loading: false,
            users
        }
    }),
    on(fetchUsersError, (state, {error})=>{
        return {
            loading: false,
            ...state,
            error
        }
    }),
    on(submit, (state, { newUser }) => {
        return {
            ...state,
            users: [...state.users, newUser]
        }
    }),
    on(remove, (state, { id }) => {
        return {
            ...state,
            users: state.users.filter(user => user.id != id)
        }
    })
)
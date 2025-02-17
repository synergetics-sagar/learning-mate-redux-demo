import { createAction, props } from "@ngrx/store";
import { User } from "./user";


export const fetchUsers = createAction("Fetch Users")
export const fetchUsersSuccess = createAction("Fetch Users Success", props<{users: User[]}>())
export const fetchUsersError = createAction("Fetch Users Error", props<{error:any}>())


export const submit = createAction("Submit User", props<{newUser: User}>())
export const remove = createAction("Remove User", props<{id: string}>())
export const update = createAction("Update User", props<{updatedUser: User}>())
export const activate = createAction("Activate User", props<{id: string}>())
export const deactivate = createAction("Deactivate User", props<{id: string}>())
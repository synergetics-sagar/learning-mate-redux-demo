import { createAction, props } from "@ngrx/store";


export const increment = createAction("Increment", props<{incBy: number}>())
export const decrement = createAction("Decrement")
export const reset = createAction("Reset")
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UsersService } from "./users.service";
import { fetchUsers, fetchUsersError, fetchUsersSuccess } from "./users.actions";
import { catchError, map, mergeMap, of } from "rxjs";
import { User } from "./user";

@Injectable({
    providedIn: "root"
})
export class UsersEffects{
    
    fetchUsers$

    constructor(private actions$: Actions, private us: UsersService ){

        this.fetchUsers$ = createEffect(()=>{
            return this.actions$.pipe(
                ofType(fetchUsers),
                mergeMap(()=>{
                    return this.us.getUsers().pipe(
                        map((users: any)=>fetchUsersSuccess({users})),
                        catchError((error:any)=>of(fetchUsersError({error})))
                    )
                })
            )
        })
        
    }

}
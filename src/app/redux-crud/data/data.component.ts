import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../user';
import { CommonModule } from '@angular/common';
import { fetchUsers, remove } from '../users.actions';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-data',
  imports: [CommonModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {

  componentUsers : User[] = []
  isLoading: boolean = false
  constructor(private store: Store<{users: {users: User[], loading: boolean, erro: any}}>){
    this.store.select("users").subscribe(state=>{
      this.componentUsers=state.users
      this.isLoading = state.loading
    })
  }

  ngOnInit(){
    // this.us.getUsers()
    // .subscribe((res:any)=>this.componentUsers=res)
    this.store.dispatch(fetchUsers())
  }

  handleDelete(id: string){
    this.store.dispatch(remove({id})) // {id: "1231241"}
  }
}

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment } from './counter.actions';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  count: number = 0

  constructor(private store: Store<{count: number}>){
    this.store.select("count")
    .subscribe(mycounter=>console.log(mycounter))
  }

  handleIncrement(incBy:number){
    this.store.dispatch(increment({incBy}))
  }

  handleDecrement(){

  }
}

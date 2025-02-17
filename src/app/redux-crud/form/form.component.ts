import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms"
import { Store } from '@ngrx/store';
import { submit } from '../users.actions';

@Component({
  selector: 'app-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  myForm: FormGroup

  constructor(private fb: FormBuilder, private store: Store){
    this.myForm = this.fb.group({
      id: "",
      name: new FormControl("sagar"),
      email: new FormControl("sagar@example.com"),
      password: new FormControl("123123"),
      active: false,
    })
  }

  handleSubmit(){
    this.myForm.value['id'] = JSON.stringify(new Date().getTime())
    this.store.dispatch(submit({newUser: this.myForm.value}))
    // this.myForm.reset()
  }

}

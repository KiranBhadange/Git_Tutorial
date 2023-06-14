import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ageShouldGreaterThan18} from 'src/app/custem-validator/custemvalidatorfile'

@Component({
  selector: 'app-emali',
  templateUrl: './emali.component.html',
  styleUrls: ['./emali.component.css']
})
export class EmaliComponent implements OnInit {
  signUpform!:FormGroup;
 constructor(private fb:FormBuilder){

 }

 ngOnInit(): void {
   this.createSignUpForm();
 }

   createSignUpForm(){
   this.signUpform = this.fb.group({
   "age":['',[Validators.required,ageShouldGreaterThan18]]
    })
  }

  signUp(){
    console.log(this.signUpform.value)
  }
  get age(){
    return this.signUpform.get("age");
  }

}

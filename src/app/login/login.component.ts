import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  val = {
    email: 'em@getMaxListeners.com',
    password:'123'
  }
  constructor() {


  }

  ngOnInit() {

  }

  login( form: NgForm, ev: any){
    console.log( form.value,'-value', ev)
    console.log( form.valid,'-form valid')
  }

  onEmailChange( ev: any){
    console.log( 'EVENT', ev)
  }
}

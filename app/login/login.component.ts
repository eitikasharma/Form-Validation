import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onAddPost(form:NgForm){
    if(form.invalid){
      console.log("Form State Invalid found");
      return;
    }
    const post = {first:form.value.first , last:form.value.last , age:form.value.age, gender:form.value.gender, mail:form.value.mail, password:form.value.password, phone:form.value.phone, city:form.value.city, state:form.value.state};
    console.log(post);
  }

}

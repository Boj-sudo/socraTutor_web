import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  success_message !: boolean;
  error_message !: string;
  user_selected !: string;

  constructor(public user_service: UserService, private router : Router) { }

  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm){
    /*if(form.value.S_Email == 'admin@gmail.com')
    {
      this.isAdmin = true;
      this.userService.LoginStudent(form.value).subscribe(
        res => {
          //this.showSuccessMessage = true;
          setTimeout(() => this.showSuccessMessage = false,3000);
          this.resetForm(form);
        },);
    }*/

    this.user_service.loginStudent(form.value).subscribe(
      res => {
        this.success_message = true;
        setTimeout(() => this.success_message = false, 3000);
        this.resetForm(form);
        this.router.navigate(['home'])
      },
    );
  }

  resetForm(form: NgForm){
    this.user_service.studentUser ={
      Student_Name: '',
      Student_Surname: '',
      Student_Address: '',
      Student_Contact: '',
      Student_ID_No: '',
      Student_Email: '',
      Student_Password: ''
    }

    form.resetForm();
    this.error_message = '';
  }

  onUserSelected(value: any){
    this.user_selected = value;
  }
}

import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})

export class RegisterComponent implements OnInit {

  user_selected !: string;
  success_message !: boolean;
  error_message !: string;

  constructor(public user_service: UserService, private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm){
    this.user_service.postStudent(form.value).subscribe(
      res =>{
        this.success_message = true;
        setTimeout(() => this.success_message = false, 3000);
        this.resetForm(form);
		    this.router.navigate(['login']);
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
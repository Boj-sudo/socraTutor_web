import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';
import { Admin } from './admin';
import { Tutor } from './tutor';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  readonly APIUrl = "https://localhost:44316/api";

  studentUser:Student ={
    Student_Name: '',
    Student_Surname: '',
    Student_Address: '',
    Student_Contact: '',
    Student_ID_No: '',
    Student_Email: '',
    Student_Password: ''
  }

  tutorUser:Tutor ={
    Tutor_Name: '',
    Tutor_Surname: '',
    Tutor_Address: '',
    Tutor_Contact: '',
    Tutor_ID_No: '',
    Tutor_Email: '',
    Tutor_Password: ''
  }

  adminUser:Admin ={
    Admin_Name: '',
    Admin_Surname: '',
    Admin_Address: '',
    Admin_Contact: '',
    Admin_ID_No: '',
    Admin_Email: '',
    Admin_Password: ''
  }  

  user:User ={
    User_Name: '',
    User_Surname: '',
    User_Address: '',
    User_Contact: '',
    User_ID_No: '',
    User_Email: '',
    User_Password: ''
  }

  constructor(private http : HttpClient) { }

  postStudent(student_user: Student){
    return this.http.post(this.APIUrl + '/Student', student_user)
  }

  loginStudent(student_user: Student){
    return this.http.post(this.APIUrl + '/Student/Login', student_user);
  }

  postTutor(tutor_user: Tutor){
    return this.http.post(this.APIUrl + '/Tutor', tutor_user)
  }

  loginTutor(tutor_user: Tutor){
    return this.http.post(this.APIUrl + '/Tutor/Login', tutor_user);
  }

  postAdmin(admin_user: Admin){
    return this.http.post(this.APIUrl + '/Admin', admin_user)
  }

  loginAdmin(admin_user: Admin){
    return this.http.post(this.APIUrl + '/Admin/Login', admin_user);
  }
}

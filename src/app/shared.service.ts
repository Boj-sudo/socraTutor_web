import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "https://localhost:44316/api";
  readonly PhotoUrl = "https://localhost:44316/Photos";

  constructor(private http : HttpClient) { }

  getStudentList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/Student');
  } 

  addStudent(val:any){
    return this.http.post(this.APIUrl + '/Student', val);
  }

  updateStudent(val:any){
    return this.http.put(this.APIUrl + '/Student', val);
  }

  deleteStudent(val:any){
    return this.http.delete(this.APIUrl + '/Student' + val);
  }

  getTutorList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/Tutor');
  } 

  addTutor(val:any){
    return this.http.post(this.APIUrl + '/Tutor', val);
  }

  updateTutor(val:any){
    return this.http.put(this.APIUrl + '/Tutor', val);
  }

  deleteTutor(val:any){
    return this.http.delete(this.APIUrl + '/Tutor' + val);
  }

  uploadTutorPhoto(val:any){
    return this.http.post(this.APIUrl + '/Tutor/saveFile', val);
  }

  getAllTutorNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/Tutor/GetAllTutorNames');
  }

  uploadPhoto(val:any){
    return this.http.post(this.APIUrl + '/Student/saveFile', val);
  }

  getAllStudentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/Student/GetAllStudentNames');
  }
}

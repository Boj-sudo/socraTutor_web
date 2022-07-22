import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.css']
})
export class AddEditStudentComponent implements OnInit {

  constructor(private service : SharedService) { }

  @Input() stu:any;
  Student_ID !: string;
  Student_Name !: string;
  Student_Surname !: string;
  Student_Address !: string;
  Student_Contact !: string;
  Student_ID_No !: string;
  Student_Email !: string;
  Student_Password !: string;
  Photo_Name !: string;
  Photo_Path !: string;
  Tutor_Name !: string;

  TutorsList !: any[];

  ngOnInit(): void {
    this.loadTutorList();
  }

  loadTutorList(){
    this.service.getAllTutorNames().subscribe((data:any)=>{
    this.TutorsList = data;

    this.Student_ID = this.stu.Student_ID;
    this.Student_Name = this.stu.Student_Name; 
    this.Student_Surname = this.stu.Student_Surname;
    this.Student_Address = this.stu.Student_Address;
    this.Student_Contact = this.stu.Student_Contact;
    this.Student_ID_No = this.stu.Student_ID_No;
    this.Student_Email = this.stu.Student_Email;
    this.Student_Password = this.stu.Student_Password;
    this.Photo_Name = this.stu.Photo_Name;
    this.Photo_Path = this.service.PhotoUrl + this.Photo_Name;
    this.Tutor_Name = this.stu.Tutor_Name
    });
  }

  addStudent(){
    var val = {Student_ID:this.Student_ID,
               Student_Name:this.Student_Name,
               Student_Surname:this.Student_Surname,
               Student_Address:this.Student_Address,
               Student_Contact:this.Student_Contact,
               Student_ID_No:this.Student_ID_No,
               Student_Email:this.Student_Email,
               Student_Password:this.Student_Password,
               Tutor_Name:this.Tutor_Name,
               Photo_Name:this.Photo_Name};

    this.service.addStudent(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateStudent(){
    var val = {Student_ID:this.Student_ID,
      Student_Name:this.Student_Name,
      Student_Surname:this.Student_Surname,
      Student_Address:this.Student_Address,
      Student_Contact:this.Student_Contact,
      Student_ID_No:this.Student_ID_No,
      Student_Email:this.Student_Email,
      Student_Password:this.Student_Password,
      Tutor_Name:this.Tutor_Name,
      Photo_Name:this.Photo_Name};

    this.service.updateStudent(val).subscribe(res=>{
    alert(res.toString());
    });
  }

  uploadPhoto(event: any){
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.service.uploadPhoto(formData).subscribe((data:any)=>{
      this.Photo_Name = data.toString();
      this.Photo_Path = this.service.PhotoUrl + this.Photo_Name;
    })
  }
}

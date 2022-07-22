import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-tutor',
  templateUrl: './add-edit-tutor.component.html',
  styleUrls: ['./add-edit-tutor.component.css']
})
export class AddEditTutorComponent implements OnInit {

  constructor(private service : SharedService) { }

  @Input() tur:any;
  Tutor_ID !: string;
  Tutor_Name !: string;
  Tutor_Surname !: string;
  Tutor_Address !: string;
  Tutor_Contact !: string;
  Tutor_ID_No !: string;
  Tutor_Email !: string;
  Tutor_Password !: string;
  Photo_Name !: string;
  Photo_Path !: string;
  Student_Name !: string;

  StudentsList !: any[];

  ngOnInit(): void {
    this.loadStudentList();
  }

  loadStudentList(){
    this.service.getAllStudentNames().subscribe((data:any)=>{
    this.StudentsList = data;

      this.Tutor_ID = this.tur.Tutor_ID;
      this.Tutor_Name = this.tur.Tutor_Name; 
      this.Tutor_Surname = this.tur.Tutor_Surname;
      this.Tutor_Address = this.tur.Tutor_Address;
      this.Tutor_Contact = this.tur.Tutor_Contact;
      this.Tutor_ID_No = this.tur.Tutor_ID_No;
      this.Tutor_Email = this.tur.Tutor_Email;
      this.Tutor_Password = this.tur.Tutor_Password;
      this.Photo_Name = this.tur.Photo_Name;
      this.Photo_Path = this.service.PhotoUrl + this.Photo_Name;
      this.Student_Name = this.tur.Student_Name
    });
  }

  addTutor(){
    var val = {Tutor_ID:this.Tutor_ID,
               Tutor_Name:this.Tutor_Name,
               Tutor_Surname:this.Tutor_Surname,
               Tutor_Address:this.Tutor_Address,
               Tutor_Contact:this.Tutor_Contact,
               Tutor_ID_No:this.Tutor_ID_No,
               Tutor_Email:this.Tutor_Email,
               Tutor_Password:this.Tutor_Password,
               Student_Name:this.Student_Name,
               Photo_Name:this.Photo_Name};

    this.service.addTutor(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateTutor(){
    var val = {Tutor_ID:this.Tutor_ID,
      Tutor_Name:this.Tutor_Name,
      Tutor_Surname:this.Tutor_Surname,
      Tutor_Address:this.Tutor_Address,
      Tutor_Contact:this.Tutor_Contact,
      Tutor_ID_No:this.Tutor_ID_No,
      Tutor_Email:this.Tutor_Email,
      Tutor_Password:this.Tutor_Password,
      Student_Name:this.Student_Name,
      Photo_Name:this.Photo_Name};

    this.service.updateTutor(val).subscribe(res=>{
    alert(res.toString());
    });
  }

  uploadTutorPhoto(event: any){
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.service.uploadTutorPhoto(formData).subscribe((data:any)=>{
      this.Photo_Name = data.toString();
      this.Photo_Path = this.service.PhotoUrl + this.Photo_Name;
    })
  }
}

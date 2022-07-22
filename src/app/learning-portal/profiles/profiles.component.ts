import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

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

  ngOnInit(): void {
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

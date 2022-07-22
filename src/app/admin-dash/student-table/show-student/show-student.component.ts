import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent implements OnInit {

  constructor(private service : SharedService) { }

  StudentList:any=[];

  ModalTitle !: string;
  ActivateAddEditStuCom:boolean=false;
  stu:any;

  ngOnInit(): void {
    this.refreshStudentList();
  }

  addClick(){
    this.stu={
      Student_ID: 0,
      Student_Name: "",
      Student_Surname: "",
      Student_Address: "",
      Student_Contact: "",
      Student_ID_No: "",
      Student_Email: "",
      Student_Password: "",
      Photo_Name: "anonymous.jpg"
    }

    this.ModalTitle="Add Student";
    this.ActivateAddEditStuCom = true;
  }

  editClick(item: any){
    console.log(item);
    this.stu=item;
    this.ModalTitle="Edit Student";
    this.ActivateAddEditStuCom=true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure?')){
      this.service.deleteStudent(item.Student_ID).subscribe(data=>{
        alert(data.toString());
        this.refreshStudentList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditStuCom = false;
    this.refreshStudentList();
  }

  refreshStudentList(){
    this.service.getStudentList().subscribe(data=>{
        this.StudentList = data;
    });
  }
}

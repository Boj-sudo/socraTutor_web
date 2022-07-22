import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-tutor',
  templateUrl: './show-tutor.component.html',
  styleUrls: ['./show-tutor.component.css']
})
export class ShowTutorComponent implements OnInit {

  constructor(private service : SharedService) { }

  TutorList:any = [];

  ModalTitle !: string;
  ActivateAddEditTurCom: boolean = false;
  tur: any;

  ngOnInit(): void {
    this.refreshTutorList();
  }

  addClick(){
    this.tur={
      Tutor_ID: 0,
      Tutor_Name: "",
      Tutor_Surname: "",
      Tutor_Address: "",
      Tutor_Contact: "",
      Tutor_ID_No: "",
      Tutor_Email: "",
      Tutor_Password: "",
      Photo_Name: "anonymous.jpg"
    }

    this.ModalTitle = "Add Tutor";
    this.ActivateAddEditTurCom = true;
  }

  editClick(item: any){
    console.log(item);
    this.tur = item;
    this.ModalTitle = "Edit Tutor";
    this.ActivateAddEditTurCom = true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure?')){
      this.service.deleteTutor(item.Tutor_ID).subscribe(data=>{
        alert(data.toString());
        this.refreshTutorList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditTurCom = false;
    this.refreshTutorList();
  }

  refreshTutorList(){
    this.service.getTutorList().subscribe(data=>{
        this.TutorList = data;
    });
  }
}

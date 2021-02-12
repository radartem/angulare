import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { Student } from '../models/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  studentList: Array<Student>;
  dataServiceService:DataServiceService;
  selectedStudent: Student;
  selectedStudentEvents: Array<Event>;
  isAddMode: boolean;
  isEditMode: boolean;

  constructor(dataServiceService: DataServiceService ) { 
    this.dataServiceService = dataServiceService;
  }

  ngOnInit(): void {
    this.init()
  }

  init(){
    this.studentList = this.dataServiceService.getStudents();
    this.selectedStudent = null;
    this.isEditMode =false;
  }

  setSelectItem(event){
    this.selectedStudent = event;
    this.selectedStudentEvents = this.dataServiceService.getStudentEvents(event.id);
    this.isEditMode =false;
  }

  deleteStudent(event){
    this.dataServiceService.deleteStudent(event);
    this.init();
  }

  addNewStudent(){
    this.isAddMode = true;
    this.selectedStudent = new Student();
    this.isEditMode =false;
  }

  addStudent(event){
    if(event){
      this.dataServiceService.addStudent(event);
      this.init();
    }

    this.isAddMode = false;
  }

  editStudent(event){
    if(event){
      this.dataServiceService.editStudent(event);
      this.init();
    }
  }
}

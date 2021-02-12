import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Student} from '../../models/student'
import { StudentEvent } from '../../models/event';
import { Output } from '@angular/core';

@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  @Input() student: Student;
  @Input() studentEvents: Array<StudentEvent>;
  @Input() isEditMode: boolean;
  @Input() isAddMode: boolean;

  @Output() deleteItem = new EventEmitter<Student>();
  @Output() editItem = new EventEmitter<Student>();
  @Output() addItem = new EventEmitter<Student>();
  
  model = new Student();
  specs: Array<string>;

  constructor() { }

  ngOnInit(): void {
    this.isEditMode = false;
    this.specs = new Array<string>("ИСиТ","asd");
  }

  delete() {
    if(confirm("Are you sure to delete stydent" + this.student.name)) {
      this.deleteItem.emit(this.student);
    }
  }

  edit() {
    this.isEditMode = true;

    this.model.group = this.student.group;
    this.model.id = this.student.id;
    this.model.name = this.student.name;
    this.model.spec = this.student.spec;
    this.model.syear = this.student.syear;
  }

  saveEdit(){
    if(this.model){
      this.editItem.emit(this.model);
    }

    this.isEditMode = false;
  }

  cancelEdit(){
    this.isEditMode = false;
  }

  saveAdd(){
    this.addItem.emit(this.model);
    this.isAddMode = false;
  }

  cancelAdd(){
    this.addItem.emit(null);
    this.isAddMode = false;
  }
}

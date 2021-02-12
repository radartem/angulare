import { EventEmitter} from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import {Student} from '../../models/student'

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  @Input() list:  Array<Student>;
  @Output() selectedItem = new EventEmitter<Student>();
  @Output() addItem = new EventEmitter();

  selectedStudent: Student; 
  constructor() { }

  ngOnInit(): void {
    this.selectedStudent = null;
  }

  selectItem(event){
    this.selectedItem.emit(event);
    if(event){
      this.selectedStudent = event;
    }
  }
  
  addItemToList(){
    this.addItem.emit(); 
  }
}

import { EventEmitter} from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import {Student} from '../../models/student'
import { Company } from '../../models/company';

@Component({
  selector: 'company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  @Input() list:  Array<Company>;
  @Output() selectedItem = new EventEmitter<Company>();
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

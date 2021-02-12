import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Student} from '../../models/student'
import { StudentEvent } from '../../models/event';
import { Output } from '@angular/core';
import { Company } from '../../models/company';

@Component({
  selector: 'company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  @Input() company: Company;
  @Input() companyEvents: Array<StudentEvent>;
  @Input() isEditMode: boolean;
  @Input() isAddMode: boolean;

  @Output() deleteItem = new EventEmitter<Company>();
  @Output() editItem = new EventEmitter<Company>();
  @Output() addItem = new EventEmitter<Company>();
  
  model = new Company();
  specs: Array<string>;

  constructor() { }

  ngOnInit(): void {
    this.isEditMode = false;
    this.specs = new Array<string>("ИСиТ","asd");
  }

  delete() {
    if(confirm("Are you sure to delete company " + this.company.name)) {
      this.deleteItem.emit(this.company);
    }
  }

  edit() {
    this.isEditMode = true;

    this.model.name = this.company.name;
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

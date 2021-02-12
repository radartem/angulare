import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { Company } from '../models/company';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  companyList: Array<Company>;
  dataServiceService:DataServiceService;
  selectedCompany: Company;
  selectedCompanyEvents: Array<Event>;
  isAddMode: boolean;
  isEditMode: boolean;

  constructor(dataServiceService: DataServiceService ) { 
    this.dataServiceService = dataServiceService;
  }

  ngOnInit(): void {
    this.init()
  }

  init(){
    this.companyList = this.dataServiceService.getCompanys();
    this.selectedCompany = null;
    this.isEditMode =false;
    this.isAddMode =false;
  }

  setSelectItem(event){
    console.log(event);
    this.selectedCompany = event;
    this.selectedCompanyEvents = this.dataServiceService.getCompanyEvents(event.id);
    console.log(this.selectedCompanyEvents);
  }

  deleteCompany(event){
    console.log(event);
    this.dataServiceService.deleteCompany(event);
    this.init();
  }

  addNewCompany(){
    this.isAddMode = true;
    this.selectedCompany = new Company();
    this.isEditMode =false;
  }

  addCompany(event){
    if(event){
      this.dataServiceService.addCompany(event);
      this.init();
    }

    this.isAddMode = false;
  }

  editCompany(event){
    if(event){
      this.dataServiceService.editCompany(event);
      this.init();
    }
  }
}


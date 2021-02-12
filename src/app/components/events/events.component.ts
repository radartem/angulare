import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { StudentEvent } from '../models/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  dataServiceService:DataServiceService;
  list: Array<StudentEvent>;
  
  constructor(dataServiceService: DataServiceService ) { 
    this.dataServiceService = dataServiceService;
  }

  ngOnInit(): void {
    this.list = this.dataServiceService.getEvents();
  }

  sort(){
    this.list = this.list.sort((a,b) => 0 - (a > b ? -1 : 1));;
  }

}

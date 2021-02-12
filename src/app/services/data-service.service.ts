import { Injectable } from '@angular/core';
import { Student } from '../components/models/student';
import { Company } from '../components/models/company';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  dataStudents: Array<Student>;
  dataCompanies: any;
  dataEvent: any;

  constructor() { 
    this.dataStudents = [
      {id: 1, name: 'Петров П.П.', spec: 'ИСиТ', group: 1, syear: 2016},
      {id: 2, name: 'Иванов И.И.', spec: 'ИСиТ', group: 1, syear: 2016},
      {id: 3, name: 'Сидоров С.С.', spec: 'ПОИТ', group: 4, syear: 2016},
      {id: 4, name: 'Кириллов К.К.', spec: 'ПОИТ', group: 5, syear: 2016},
      {id: 5, name: 'Алексеев А.А.', spec: 'ДЭВИ', group: 9, syear: 2016},
      {id: 6, name: 'Сергеев С.С.', spec: 'ПОИБМС', group: 7, syear: 2017},
      {id: 7, name: 'Михайлов М.М.', spec: 'ПОИБМС', group: 8, syear: 2017},
      {id: 8, name: 'Александров А.А.', spec: 'ПОИБМС', group: 7, syear: 2017},
      {id: 9, name: 'Кислый К.А.', spec: 'ДЭВИ', group: 10, syear: 2017},
      {id: 10, name: 'Прокопеня А.А.', spec: 'ПОИБМС', group: 7, syear: 2017},
      {id: 11, name: 'Ветров А.В.', spec: 'ПОИБМС', group: 8, syear: 2017},
      {id: 12, name: 'Викторов В.В.', spec: 'ИСиТ', group: 3, syear: 2017},
      {id: 13, name: 'Алексей А.А.', spec: 'ПОИБМС', group: 7, syear: 2015},
      {id: 14, name: 'Григорьев  Г.Г.', spec: 'ДЭВИ', group: 9, syear: 2016},
      {id: 15, name: 'Владимиров В.В.', spec: 'ПОИБМС', group: 8, syear: 2017},
      {id: 16, name: 'Петров П.П.', spec: 'ДЭВИ', group: 9, syear: 2017},
      {id: 17, name: 'Юрьев Ю.Ю.', spec: 'ИСиТ', group: 3, syear: 2017},
      {id: 18, name: 'Евгеньев Е.В.', spec: 'ПОИБМС', group: 6, syear: 2018},
      {id: 19, name: 'Валерьев В.В.', spec: 'ПОИБМС', group: 7, syear: 2017},
      {id: 20, name: 'Антонов А.А.', spec: 'ПОИБМС', group: 7, syear: 2017},
      {id: 21, name: 'Афанасьев А.А.', spec: 'ИСиТ', group: 2, syear: 2015},
      {id: 22, name: 'Федоров Ф.Ф.', spec: 'ПОИБМС', group: 7, syear: 2016},
      {id: 23, name: 'Николаев Н.Н.', spec: 'ИСиТ', group: 3, syear: 2017}
    ];
  
    this.dataCompanies = [  
      {id:1,  name: 'iTechArt'}, 
      {id:2,  name: 'LeverX'},
      {id:3,  name: 'iSsoft'},
      {id:4,  name: 'EPAM'},
      {id:5,  name: 'IBA'},
      {id:6,  name: 'Wargaming'}
    ];
  
    this.dataEvent = [
      {
        id: 1, date: '2019-01-07', text: 'Собеседование',
        company: {id: 1, name: 'iTechArt'}, student: {id: 2, name: 'Иванов И.И.', spec: 'ИСиТ', group: 1, syear: 2016}
      },
      {
        id: 2, date: '2018-09-12', text: 'Стажировка',
        company: {id: 1, name: 'iTechArt'}, student: {id: 1, name: 'Петров П.П.', spec: 'ИСиТ', group: 1, syear: 2016}
      },
      {
        id: 3, date: '2018-09-07', text: 'Принят на работу',
        company: {id: 2, name: 'LeverX'}, student: {id: 1, name: 'Петров П.П.', spec: 'ИСиТ', group: 1, syear: 2016}
      },
      {
        id: 4, date: '2018-08-22', text: 'Собеседование не прошел, плохой англ',
        company: {id: 2, name: 'LeverX'}, student: {id: 4, name: 'Кириллов К.К.', spec: 'ПОИТ', group: 5, syear: 2016}
      },
      {
        id: 5, date: '2018-07-12', text: 'Пошел на лаб',
        company: {id: 3, name: 'iSsoft'}, student: {id: 5, name: 'Алексеев А.А.', spec: 'ДЭВИ', group: 9, syear: 2016}
      },
      {
        id: 6, date: '2018-06-14', text: 'Посещает курсы',
        company: {id: 4, name: 'EPAM'}, student: {id: 2, name: 'Иванов И.И.', spec: 'ИСиТ', group: 1, syear: 2016}
      },
      {
        id: 7, date: '2018-04-15', text: 'Работает полный день',
        company: {id: 4, name: 'EPAM'}, student: {id: 6, name: 'Сергеев С.С.', spec: 'ПОИБМС', group: 7, syear: 2017}
      },
      {
        id: 8, date: '2017-03-25', text: 'Хакатон 1 место',
        company: null, student: {id: 8, name: 'Александров А.А.', spec: 'ПОИБМС', group: 7, syear: 2017}
      },
      {
        id: 9, date: '2017-02-30', text: 'Собеседование',
        company: {id: 5, name: 'IBA'}, student: {id: 8, name: 'Александров А.А.', spec: 'ПОИБМС', group: 7, syear: 2017}
      },
      {
        id: 10,
        date: '2017-01-30',
        text: 'Собеседование',
        company: {id: 2, name: 'LeverX'},
        student: {id: 8, name: 'Александров А.А.', spec: 'ПОИБМС', group: 7, syear: 2017}
      }
    ];
  }

  getStudents() : any{
    return this.dataStudents;
  }

  getStudentEvents(id: number) : any{
    return this.dataEvent.filter(x => x.student?.id === id);
  }

  deleteStudent(student: Student){
    this.dataStudents = this.dataStudents.filter(x => x.id !== student.id);
    this.dataEvent.filter(x => x.student?.id === student.id).map(x => x.student = null);
  }

  addStudent(student: Student){
    student.id = this.dataStudents.length + 1; 
    this.dataStudents.push(student);
  }

  editStudent(student: Student){
    this.dataStudents.map(x => {
      if(x.id === student.id){
        x.group = student.group;
        x.name = student.name;
        x.spec = student.spec;
        x.syear = student.syear;
      }
    });
  }

  getCompanys() : any{
    return this.dataCompanies;
  }

  getCompanyEvents(id: number) : any{
    return this.dataEvent.filter(x => x.company?.id === id);
  }

  deleteCompany(company: Company){
    this.dataCompanies = this.dataCompanies.filter(x => x.id !== company.id);
    this.dataEvent.filter(x => x.company?.id === company.id).map(x => x.company = null);
  }

  addCompany(company: Company){
    company.id = this.dataCompanies.length + 1; 
    this.dataCompanies.push(company);
  }

  editCompany(company: Company){
    this.dataCompanies.map(x => {
      if(x.id === company.id){
        x.name = company.name;
      }
    });
  }

  getEvents() : any{
    return this.dataEvent;
  }
}

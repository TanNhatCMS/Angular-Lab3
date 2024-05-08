import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = [
    { fullname: 'Nguyễn Thị Tèo', birthday: new Date(2000, 6, 2), gender: 'Nam', mark: 8.5, pic: 'nguyenthiteo.png' },
  ];

  constructor() { }

  getStudents(): Student[] {
    return this.students;
  }

}

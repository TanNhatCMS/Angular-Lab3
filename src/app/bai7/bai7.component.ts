import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FormsModule} from "@angular/forms";
import { Student } from '../students/student';
import { StudentService } from '../students/student.service';
@Component({
  selector: 'app-bai7',
  standalone: true,
  imports: [CommonModule, FormsModule, NgOptimizedImage],
  templateUrl: './bai7.component.html',
  styleUrls: ['./bai7.component.css']
})
export class Bai7Component implements OnInit {
  students: Student[] | undefined;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }
}

import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import { Router } from '@angular/router';
import { Observable} from "rxjs";
import {StudentService} from '../student.service'



@Component({
  selector: 'app-list-survey',
  templateUrl: './list-survey.component.html',
  styleUrls: ['./list-survey.component.css']
})
export class ListSurveyComponent implements OnInit {
  students: Observable<Student[]>;
  id:String;
  constructor(
    private router: Router, private studentService: StudentService) { }

  ngOnInit(): void {this.showdata();
  }
  

showdata() {
  this.students = this.studentService.getStudent();
}
}

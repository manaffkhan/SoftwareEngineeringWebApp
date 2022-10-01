import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private get_url = 'http://localhost:9191/students';
  private post_url = 'http://localhost:9191/addStudent';


  private id:String;


  constructor(private http: HttpClient) { }

postStudent(student: Object): Observable<Object> {
  console.log(student.toString);
  return this.http.post(this.post_url, student);
  }

  getStudent(): Observable<Student[]> {
  return this.http.get<Student[]>(this.get_url);
}

getStudentBy(id){

  const request_url = 'http://localhost:9191/studentById/'+id;

  return this.http.get(request_url);
}

}



import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import { ActivatedRoute } from '@angular/router';
import { Observable} from "rxjs";
import {StudentService} from '../student.service'

@Component({
  selector: 'app-std-details',
  templateUrl: './std-details.component.html',
  styleUrls: ['./std-details.component.css']
})
export class StdDetailsComponent implements OnInit {
  /*students: Observable<Student[]>;
  stdid:String;
  constructor(private router: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(){
    this.stdid = this.router.snapshot.paramMap.get('id');
    this.showdata();
    console.log("id selected is "+this.stdid);
    console.log("Returned Student " + this.students);
  }

  showdata() {
    this.students = this.studentService.getStudentBy(this.stdid);
  }*/

  stdDet:Student;
  stdid:String;
  public studentDetails:Student;
  constructor(private myService:StudentService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.stdid = this.route.snapshot.paramMap.get('id');
    console.log("id selected is "+this.stdid);
    this.getStudent();
  }

  handleSuccessfulResponse(response)
  {
      this.studentDetails=response;
      console.log(response);
      console.log("student details from database using id retrieving is "+this.studentDetails);
  }

  getStudent() {
    
    this.myService.getStudentBy(this.stdid).subscribe(
      /*res => {
        if(res) {
          this.studentDetails = res;
        }
      }*/
      response=>this.handleSuccessfulResponse(response),
    );
  }




}

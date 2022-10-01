import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService} from '../student.service'
import { Data } from "../data";


@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css']
})
export class CreateSurveyComponent implements OnInit {
  d: Data = new Data();
  student: Student = new Student();
  submitted = false;
  list_likes = []
 
  constructor( private router: Router, private studentService: StudentService) {}

  ngOnInit(): void {
  }


  onCheckboxChange(event, value) {
    if (event.target.checked) {

      this.list_likes.push(value);
    } 
    if (!event.target.checked) {

      let index = this.list_likes.indexOf(value);

      if (index > -1) {

        this.list_likes.splice(index, 1);
      }
    }
  }


  saveresponse() {
    this.studentService.postStudent(this.student).subscribe(
        succeed=>{
          alert('Form submitted\n'  + this.student);
          console.log(this.d.getnums());
          this.router.navigate(['./home']);
        },
        error=>{
          console.log(this.d.getnums());
          alert('failed to submit the form\n' + this.student);
        });

    this.student = new Student();

  }
onSubmit() {
  this.student.about_college = this.list_likes.join();
  // let body ="firstname="+this.student.firstname+"&"
  //           +"lastname="+this.student.lastname+"&"
  //           +"address="+this.student.address +"&"
  //           +"city="+this.student.city+"&"
  //           +"state="+this.student.state+"&"
  //           +"zip="+this.student.zip+"&"
  //           +"phone="+this.student.phone+"&"
  //           +"email="+this.student.email+"&"
  //           +"date="+this.student.dos+"&"
  //           +"campus="+this.student.about_college+"&"
  //           +"reason="+this.student.interested+"&"
  //           +"likelihood="+this.student.recommend;
  this.saveresponse();
  this.submitted = true;
  return;
  } 

  
  }
  
    
    

     

  // alert("Entered values are:" + this.student.recommend)
  // alert("Entered values are:" + this.student.interested)
  // alert("Entered values are:" + this.student.about_college)


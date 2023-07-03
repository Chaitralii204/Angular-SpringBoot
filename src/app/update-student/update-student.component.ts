import { Component } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css'],
})
export class UpdateStudentComponent {
  constructor(
    private scactive: ActivatedRoute,
    private studentservice: StudentServiceService,
    private router: Router
  ) {}
  sid!: number;
  student: Student = new Student();

  ngOnInit(): void {
    this.sid = this.scactive.snapshot.params['sid'];
    this.studentservice.getStudentbyId(this.sid).subscribe(
      (data) => {
        this.student = data;
        console.log(this.student);
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(this.sid);
  }
  updateStudentData() {
    this.studentservice.updateStudentData(this.student).subscribe((data) => {
      alert('Student Data Updated Successfully');
      this.router.navigate(['student']);
    });
  }
}

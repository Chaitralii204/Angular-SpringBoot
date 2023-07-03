import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent {
  constructor(private studentservice: StudentServiceService, private router: Router) {}
  students: Student[] = [];

  ngOnInit(): void {
    this.studentservice.getAllStudents().subscribe(
      (data: Student[]) => {
        this.students = data;
      },
      (error) => {
        alert(error);
      }
    );
  }
  UpdateStudent(sid: number) {
    console.log(sid);
    this.router.navigate(['/update-student', sid]);
    
  }
  DeleteStudent(sid: number) {
    console.log(sid);
    this.studentservice.DeleteStudentData(sid).subscribe((data) => {
      alert('Student Data Deleted Successfully');
      this.router.navigate(['student']);
    });
  }
}

import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
})
export class CreateStudentComponent {
  student: Student = new Student();
  constructor(
    private studentService: StudentServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {}
  addStudentData() {
    this.studentService.addStudent(this.student).subscribe(
      (data) => {
        alert('Student added successfully.');
        this.goToListofStudents();
      },
      (error) => alert(error)
    );
  }

  goToListofStudents() {
    this.router.navigate(['/students']);
  }
}

import { Injectable } from '@angular/core';
import { Student } from './student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentServiceService {
  baseUrl = 'http://localhost:8081/student';
  constructor(private httpClient: HttpClient) {}

  addStudent(student: Student) {
    console.log(student);

    return this.httpClient.post(`${this.baseUrl}`, student);
  }

  getAllStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.baseUrl}`);
  }

  getStudentbyId(sid: number): Observable<Student> {
    return this.httpClient.get<Student>(`${this.baseUrl}/${sid}`);
  }
  updateStudentData(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(`${this.baseUrl}`, student);
  }
  DeleteStudentData(sid: number): Observable<Student> {
    return this.httpClient.delete<Student>(`${this.baseUrl}/${sid}`);
  }
}

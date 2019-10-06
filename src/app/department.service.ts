import { Injectable } from '@angular/core';

const departments = [
  { "id": 1, "name": "Java" },
  { "id": 2, "name": "Angular" },
  { "id": 3, "name": "Hibernate" }
];
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor() { }

  getDepartments(): any[]{
    return departments;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentDetailComponent } from '../department-detail/department-detail.component';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      Department List
    </h3>
    <ul class="items">
      <li (click)="onSelect(department)" *ngFor="let department of departments">
        <span class="badge">{{department.id}}</span>{{department.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  public departments = [
    { "id": 1, "name": "Javaa" },
    { "id": 2, "name": "Angular" },
    { "id": 3, "name": "Hibernate" }
  ];
  constructor(private router: Router, private deptService: DepartmentService) { 

  }

  ngOnInit() {
    //this.departments = this.deptService.getDepartments();
    console.log(this.departments);
  }

  onSelect(department) {
    this.router.navigate(['/departments', department.id]);     
  }

}

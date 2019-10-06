import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentService } from './department.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DepartmentListComponent,
    EmployeeListComponent,
    DepartmentDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

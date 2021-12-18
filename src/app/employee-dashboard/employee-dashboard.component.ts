import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {

  formValue !: FormGroup;
  constructor(private buildnumber: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.buildnumber.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      mobile:[''],
      salary:['']
    })
  }

}

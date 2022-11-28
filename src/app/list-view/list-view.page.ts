import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Employee } from '../models/employee.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.page.html',
  styleUrls: ['./list-view.page.scss'],
})
export class ListViewPage implements OnInit, OnDestroy {
  employeeDataList: Employee[] = [];
  employeeListSubs: Subscription = new Subscription();

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.getEmployeeList();
  }

  getEmployeeList() {
    this.employeeListSubs = this.dataService
      .fetchData()
      .subscribe((employeeList: Employee[]) => {
        this.employeeDataList = employeeList;
      });
  }

  displayEmployeeDetails(data: { id: Number }) {
    this.router.navigate(['detail-view', data.id]);
  }

  ngOnDestroy() {
    this.employeeListSubs.unsubscribe();
  }
}

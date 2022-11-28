import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../services//data.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../models/employee.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.page.html',
  styleUrls: ['./detail-view.page.scss'],
})
export class DetailViewPage implements OnInit, OnDestroy {
  currentEmployeeData: any = {};
  employeeDataSubs: Subscription = new Subscription();
  routeDataSubs: Subscription = new Subscription();

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getCurrentEmployeeDetails();
  }

  getEmployeeList(params: any) {
    this.dataService.fetchData().subscribe((employeeList: Employee[]) => {
      let employeeDataList = employeeList;
      this.currentEmployeeData = employeeDataList.find((employee: Employee) => {
        return employee.id === Number(params.id);
      });
    });
  }

  getCurrentEmployeeDetails() {
    this.route.params.subscribe((params: any) => {
      this.getEmployeeList(params);
    });
  }

  ngOnDestroy() {
    this.employeeDataSubs.unsubscribe();
    this.routeDataSubs.unsubscribe();
  }
}

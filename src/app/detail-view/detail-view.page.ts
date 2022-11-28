import { Component, OnInit } from '@angular/core';
import { DataService } from '../services//data.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.page.html',
  styleUrls: ['./detail-view.page.scss'],
})
export class DetailViewPage implements OnInit {
  currentEmployeeData: any = {};
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
}

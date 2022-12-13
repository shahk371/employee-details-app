import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.page.html',
  styleUrls: ['./list-view.page.scss'],
})
export class ListViewPage implements OnInit {
  employeeDataList$!: Observable<Employee[]>;

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.employeeDataList$ = this.dataService.fetchData();
  }

  displayEmployeeDetails(data: { id: Number }) {
    this.router.navigate(['detail-view', data.id]);
  }
}

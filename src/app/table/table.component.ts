import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/Services/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  dataStudentDetail: any[] = [];
  CheckDummyData: any[] = [];

  constructor(private APISerive: APIService) {
  }

  ngOnInit(): void {
    this.getdata();
  }
  async getdata() {
    (await this.APISerive.Getdata()).subscribe((data: any) => {
      this.CheckDummyData = data;
      this.dataStudentDetail = data;
    })
  }
}

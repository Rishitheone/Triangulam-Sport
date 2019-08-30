import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss']
})
export class NoticesComponent implements OnInit {
   
  data=ELEMENT_DATA;
  displayedColumns: string[] = ['date', 'title'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

export interface PeriodicElement {
  date: string;
  title: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: '10-11-2019', title: 'Extract of Unaudited Financial Results for the quarter ended June 30, 2019 published in newspapers – Indian Express and Financial Express',},
  {date:' 22-08-2018', title: 'Extract of Unaudited Financial Results for the quarter ended June 30, 2019 published in newspaper – Loksatta (Marathi)',},
  {date: '30-08-2015', title: 'Notice of 42nd Annual General Meeting (Post IPO) scheduled on August 12, 2019 published in newspapers – Times of India and Economic Times',},
  {date:' 30-08-2015', title: 'Notice of 42nd Annual General Meeting (Post IPO) scheduled on August 12, 2019 published in newspapers – Maharashtra Times (Marathi)', },
  {date: '5', title: 'Notice of Board Meeting published in newspapers - English – Indian Express and Financial Express',},
  {date: '6', title: 'Notice of Board Meeting published in newspaper – Marathi - Loksatta',},
  {date: '7', title: 'Notice of Board Meeting scheduled on July 19, 2019',},
  {date: '8', title: 'Intimation of Trading Window Close Period (for Q1F20UFR)', },
  {date: '9', title: 'Extract of Audited Financial Results for the quarter / year ended March 31, 2019 published in newspapers – Indian Express and Financial Express', },
  {date: '20-09-2012', title: 'Extract of Audited Financial Results for the quarter / year ended March 31, 2019 published in newspaper - Loksatta (Marathi)', },
  {date: '11', title: 'Sodium',},
  {date: '12', title: 'Magnesium', },
  {date: '13', title: 'Aluminum',},
  {date: '14', title: 'Silicon', },
  {date: '15', title: 'Phosphorus',},
  {date: '16', title: 'Sulfur', },
  {date: '17', title: 'Chlorine',},
  {date: '18', title: 'Argon', },
  {date: '19', title: 'Potassium', },
  {date: '20', title: 'Calcium', },
];
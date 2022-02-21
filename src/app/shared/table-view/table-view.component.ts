import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { EmergencyModel } from 'src/app/models/emergency-model';
import { TableHeaderModel } from 'src/app/models/table-header-model copy';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {


  @ViewChild('dt') table: Table | undefined;

  @Input() dataList: EmergencyModel[] | [] = [];
  @Input() cols: TableHeaderModel[] = [];
  @Input() loading: boolean = true;
  @Input() paginator: boolean = true;
  @Input() pageOptions: number[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  onDateSelect(value: Date) {
    if (this.table) {
      this.table.filter(this.formatDate(value), 'date', 'equals')
    }
  }

  formatDate(date: Date) {
    let month: (Number | String) = date.getMonth() + 1;
    let day: (Number | String) = date.getDate();

    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }
    return date.getFullYear() + '-' + month + '-' + day;
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.table!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }

  /* 
  * Work around for display body value.
  *
  * Reason - Key attribute format xxx.yyy not supported in dynamic tables
  * 
  */
  processTableData(array: any, field: string) {
    return array[field.split('.')[0]][field.split('.')[1]];
  }

}

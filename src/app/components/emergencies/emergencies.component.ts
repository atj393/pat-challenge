import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Token } from 'src/app/guard/token';
import { EmergencyModel } from 'src/app/models/emergency-model';
import { TableHeaderModel } from 'src/app/models/table-header-model copy';
import { EmergenciesService } from '../../services/emergencies.service';

@Component({
  selector: 'app-emergencies',
  templateUrl: './emergencies.component.html',
  styleUrls: ['./emergencies.component.scss'],
})

export class EmergenciesComponent implements OnInit {

  emergencyList: EmergencyModel[] = [];
  loading: boolean = true;
  paginator: boolean = true;
  isTokenAdded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  cols: TableHeaderModel[] = [];
  pageOptions: number[] = [2, 5, 10];

  constructor(private emergenciesService: EmergenciesService, private token: Token) { }

  ngOnInit(): void {

    this.cols = [{
      field: 'emergency.emergencyId',
      header: 'Emergency Id',
      sort: false,
      type: 'text',
      searchType: 'contains'
    }, {
      field: 'holder.fullName',
      header: 'Holder Name',
      sort: true,
      type: 'text',
      searchType: 'contains'
    }, {
      field: 'device.serialNumber',
      header: 'Serial Number',
      sort: true,
      type: 'text',
      searchType: 'contains'
    }, {
      field: 'emergency.requestTime',
      header: 'Request Time',
      sort: true,
      type: 'date',
      searchType: 'equals'
    }]

    this.token.tokenListener.subscribe((value: Date | null) => {
      if (value) {
        this.isTokenAdded.next(true);
        this.getEmergencyList();
        this.token.tokenListener.unsubscribe();
      }
    });
  }

  getEmergencyList() {
    this.loading = true;
    this.emergenciesService.getEmergencyData().subscribe((response: any) => {
      if (response)
        this.emergencyList = response.map((obj: EmergencyModel) => {
          obj.holder.fullName = obj.holder.firstName + ' ' + obj.holder.lastName;
          return obj;
        });
      this.loading = false;
    });
  }

}

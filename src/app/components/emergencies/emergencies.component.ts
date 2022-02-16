import { Component, OnInit } from '@angular/core';
import { EmergenciesService } from '../../services/emergencies.service';

export interface EmergencyModel {
  emergency: {
    emergencyId: String;
    requestTime: String;
  },
  device: {
    serialNumber: String;
  },
  holder: {
    firstName: String;
    lastName: String
  }
}

@Component({
  selector: 'app-emergencies',
  templateUrl: './emergencies.component.html',
  styleUrls: ['./emergencies.component.scss']
})

export class EmergenciesComponent implements OnInit {

  emergencyList: EmergencyModel[] = [];

  constructor(private emergenciesService: EmergenciesService) { }

  ngOnInit(): void {
    this.getEmergencyList();
  }

  getEmergencyList() {
    this.emergenciesService.getEmergencyData().subscribe((response: any) => {
      this.emergencyList = response.content;
    },
      err => {
      },
      () => {
      });
  }

}

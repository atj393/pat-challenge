import { Component, OnInit } from '@angular/core';
import { EmergencyModel } from 'src/app/models/emergency-model';
import { EmergenciesService } from '../../services/emergencies.service';
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
      if (response)
        this.emergencyList = response.content;
    });
  }

}

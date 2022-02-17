import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { EmergencyModel } from 'src/app/models/emergency-model';
import { Token } from 'src/app/shared/token';
import { EmergenciesService } from '../../services/emergencies.service';
@Component({
  selector: 'app-emergencies',
  templateUrl: './emergencies.component.html',
  styleUrls: ['./emergencies.component.scss']
})

export class EmergenciesComponent implements OnInit {

  emergencyList: EmergencyModel[] = [];
  selectedCustomers: EmergencyModel[] = [];
  loading: boolean = true;
  isTokenAdded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private emergenciesService: EmergenciesService, private token: Token) { }

  ngOnInit(): void {
    this.token.tokenListener.subscribe((value: Date | null) => {
      console.log("value : " + value);
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
        this.emergencyList = response.content;

      this.loading = false;
    });
  }

}

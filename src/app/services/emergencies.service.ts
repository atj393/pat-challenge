import { Injectable } from '@angular/core';
import { EmergencyModel } from '../components/emergencies/emergencies.component';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmergenciesService {

  constructor(private http: HttpClient) { }

  getEmergencyData(): Observable<EmergencyModel[]> {

    const url = "https://code-challenge.patronus-group.com/getAllEmergencies";
    return this.http.get<EmergencyModel[]>(url).pipe(
      catchError(this.handleError));

  }

  private handleError(error: HttpResponse<any> | any) {
    return throwError(error);
  }
}



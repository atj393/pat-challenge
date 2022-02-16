import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EmergencyModel } from '../models/emergency-model';

@Injectable({
  providedIn: 'root'
})
export class EmergenciesService {

  constructor(private http: HttpClient) { }

  getEmergencyData(): Observable<EmergencyModel[]> {
    return this.http.get<EmergencyModel[]>('/api/getAllEmergencies').pipe(
      catchError(this.handleError));

  }

  private handleError(error: HttpResponse<any> | any) {
    return throwError(error);
  }
}



import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { EmergencyModel } from '../models/emergency-model';

@Injectable({
  providedIn: 'root'
})
export class EmergenciesService {

  constructor(private http: HttpClient) { }

  getEmergencyData(): Observable<EmergencyModel[]> {
    return this.http.get<EmergencyModel[] | any>('/api/getAllEmergencies').pipe(
      map(response => response = response?.content),
      catchError(this.handleError));

  }

  private handleError(error: HttpResponse<any> | any) {
    return throwError(error);
  }
}



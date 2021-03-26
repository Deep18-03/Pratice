import { Injectable } from '@angular/core';
import { ICompany } from './company';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import {catchError,tap} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  // private companyUrl='http://localhost:3000';
  // private companyUrl='api/companies/companies.json';

  private companyUrl = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient){}


  //Add Service
  create(company: any): Observable<ICompany> {
    return this.http.post<ICompany>(this.companyUrl + '/company/', JSON.stringify(company), this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }  

  //Get Service
  getCompany():Observable<ICompany[]>{
    return this.http.get<ICompany[]>(this.companyUrl + '/company/').pipe(
      catchError(this.handleError)
    )
  }   

  //Delete service
  delete(id: number){
    return this.http.delete<ICompany>(this.companyUrl + '/company/' + id, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  
  getById(id: number): Observable<ICompany> {
    return this.http.get<ICompany>(this.companyUrl + '/company/' + id)
    .pipe(
      catchError(this.handleError)
    )
  }

  //Update Service
  update(company: ICompany) {
    return this.http.put<ICompany>(this.companyUrl + '/company/' +company.id , JSON.stringify(company), this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }


    private handleError(err: HttpErrorResponse): Observable<never> {
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
        errorMessage = `An error occurred: ${err.error.message}`;
      } else {
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }
    

}

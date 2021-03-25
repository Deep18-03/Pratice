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




  create(company: any): Observable<ICompany> {
    return this.http.post<ICompany>(this.companyUrl + '/company/', JSON.stringify(company), this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }  


  getCompany():Observable<ICompany[]>{
    
    return this.http.get<ICompany[]>(this.companyUrl + '/company/').pipe(
      // tap(data=>console.log('All',JSON.stringify(data))),
      catchError(this.handleError)
    // return this.http.get<ICompany[]>(this.companyUrl + '/company/').pipe(
    //   // tap(data=>console.log('All',JSON.stringify(data))),
    //   catchError(this.handleError)
    )
  }   

  delete(id: number){
    return this.http.delete<ICompany>(this.companyUrl + '/company/' + id, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  update(company: ICompany) {
    return this.http.put<ICompany>(this.companyUrl + '/company/' + company.id, JSON.stringify(company), this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }
    private handleError(err: HttpErrorResponse): Observable<never> {
      // in a real world app, we may send the server to some remote logging infrastructure
      // instead of just logging it to the console
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }
    

}

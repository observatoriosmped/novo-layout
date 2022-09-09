import { Injectable } from '@angular/core';
 
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
 
@Injectable({
    providedIn: 'root'
  })
export class ExportadorService {
 
  baseURL: string = "http://localhost:8080/exportar-arquivo/por-nome";
 
  constructor(private http: HttpClient) {
  }

  // getCSV(tituloPainel): Observable<any> {
  //   const params = new HttpParams().set('fileName',tituloPainel);
  //   return this.http.get(this.baseURL, {params:params, responseType:'blob'})
  // }

  getCSV(tituloDoGrafico): Observable<any> {
    const params = new HttpParams().set('fileName', tituloDoGrafico);
    return this.http.get(this.baseURL, {params:params, responseType:'blob'})
  }
 
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compagny } from '../model/compagny.model';
import { PageableService } from './pageable.service';
import { Page } from '../model/page.model';
import { Pageable } from '../model/pageable.model';

@Injectable({
  providedIn: 'root'
})
export class CompagnyService {

  private baseUrl="api/companies"
  constructor(private http : HttpClient) { }

  getCompanies(pageable: Pageable):Observable<any>{
    let url = this.baseUrl
    + '?page=' + pageable.pageNumber
    + '&size=' + pageable.pageSize
    return this.http.get<Page<Compagny>>(url);
  }
  
  getCompanyByName(name:string):Observable<any>{
     
    return this.http.get(this.baseUrl+"/"+name);
  }
}


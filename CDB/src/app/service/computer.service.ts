import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Computer } from '../model/computer.model';
import { Pageable } from '../model/pageable.model';
import { Page } from '../model/page.model';
import { convertMetaToOutput } from '@angular/compiler/src/render3/util';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  private baseUrl="api/computers"
  constructor(private http : HttpClient) { }

  getComputers(pageable: Pageable):Observable<any>{
    let url = this.baseUrl
    + '?page=' + pageable.pageNumber
    + '&size=' + pageable.pageSize
    return this.http.get<Page<Computer>>(url);
  }
  getComputerByName(name:string):Observable<any>{
    return this.http.get(this.baseUrl+"/"+name);
  }
  updateComputer(name:string,computer:Computer){
    return this.http.put(this.baseUrl+"/"+name,computer);
  }
}

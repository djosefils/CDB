import { Component, OnInit } from '@angular/core';
import { Compagny } from 'src/app/model/compagny.model';
import { CompagnyService } from 'src/app/service/compagny.service';
import { Page } from 'src/app/model/page.model';
import { PageableService } from 'src/app/service/pageable.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  page: Page<Compagny> = new Page();
  name:string;
  visible:boolean;
  constructor(private compagyService:CompagnyService,private pageableService:PageableService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.visible=true;
    this.compagyService.getCompanies(this.page.pageable).subscribe(data=>{
      this.page=data;
      this.name="";
    })
  }
  public getNextPage(): void {
    this.page.pageable = this.pageableService.getNextPage(this.page);
    this.loadData();
  }
 
  public getPreviousPage(): void {
    this.page.pageable = this.pageableService.getPreviousPage(this.page);
    this.loadData();
  }
 
  public getPageInNewSize(pageSize: number): void {
    this.page.pageable = this.pageableService.getPageInNewSize(this.page, pageSize);
    this.loadData();
  }
  search() {
   if(this.name){
    this.visible=false;
    this.compagyService.getCompanyByName(this.name).subscribe(data=>{
      this.page=new Page();
      this.page.content=[];
      this.page.content.push(data);
      
    })
   }
  }
}

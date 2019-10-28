import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/model/computer.model';
import { Pageable } from 'src/app/model/pageable.model';
import { ComputerService } from 'src/app/service/computer.service';
import { PageableService } from 'src/app/service/pageable.service';
import { Page } from 'src/app/model/page.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent implements OnInit {

  page: Page<Computer> = new Page();
  name:string;
  visible:boolean;
  constructor(private computerService:ComputerService,private pageableService:PageableService,private router:Router) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.visible=true;
    this.computerService.getComputers(this.page.pageable).subscribe(data=>{
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
    this.computerService.getComputerByName(this.name).subscribe(data=>{
      this.page=new Page();
      this.page.content=[];
      this.page.content.push(data);
      
    })
   }
  }
  detail(name){
   this.router.navigate(['/edit-computer',name])
  }
}
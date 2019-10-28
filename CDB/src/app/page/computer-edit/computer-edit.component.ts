import { Component, OnInit } from '@angular/core';
import { ComputerService } from 'src/app/service/computer.service';
import { Computer } from 'src/app/model/computer.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-computer-edit',
  templateUrl: './computer-edit.component.html',
  styleUrls: ['./computer-edit.component.css']
})
export class ComputerEditComponent implements OnInit {
computer:Computer=new Computer();
  constructor(private computerService: ComputerService,private router:Router,private activeRouter:ActivatedRoute) { }

  ngOnInit() {
    console.log("name id")
    console.log(this.activeRouter.snapshot.params.name)
 
      this.getComputerByName(this.activeRouter.snapshot.params.name);
    
  }

  getComputerByName(name){
    this.computerService.getComputerByName(name).subscribe(data=>{
      this.computer=data;
    })
  }

  save(){
   this.computerService.updateComputer(this.computer.name,this.computer).subscribe(data=>{
     this.computer=new Computer();
    this.router.navigate(["/computers"])
   })
  }
}

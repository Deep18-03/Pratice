import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from '../company-list/company.service';
@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.css']
})
export class CompanyUpdateComponent implements OnInit {

  id!: number;
  companyLabel:string='Edit';
  updateForm!: FormGroup;
  constructor(private fb: FormBuilder,private companyService:CompanyService,private router:Router) { }
 
  ngOnInit(): void {
    let userId = window.localStorage.getItem("companyId");
    if(!userId) {
      alert("Invalid action.")
      this.router.navigate(['company-list']);
      return;
    }
    this.updateForm=this.fb.group({
      id:[],
      emailID:['',Validators.required],
      name:['',Validators.required],
      totalEmployee:[''],
      address:['',Validators.required],
      isCompanyActive:['',Validators.required],
      totalBranch:['',Validators.required],
      companyBranch:this.fb.group({
        branchId:[''],
        branchName:[''],
        branchAddress:['']
      })
    });
    this.companyService.getById(+userId)
    .subscribe( data => {
      this.updateForm.setValue(data);
    });
  
  }



  onUpdate()
  {
    console.log("added");
    this.companyService.update(this.updateForm.value).subscribe(data=>{
      this.router.navigate(['company-list']);
    },
    error => {
      alert(error);
    });
  }
}

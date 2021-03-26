import { Component, OnInit } from '@angular/core';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { FormBuilder,Validators, FormGroup, FormControl} from '@angular/forms';
import { CompanyService } from '../company-list/company.service';
import { Router } from '@angular/router';
// import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.css']
})
export class CompanyAddComponent implements OnInit {

  formLabel:string="Add";
  AddForm!:FormGroup;
  constructor(private fb: FormBuilder,private companyService:CompanyService,private router:Router) { }

  ngOnInit(): void {
    this.AddForm=this.fb.group({
      emailID:['',Validators.required],
      name:['',[Validators.required,Validators.minLength(3)]],
      totalEmployee:['',Validators.required],
      address:['',Validators.required],
      isCompanyActive:[''],
      totalBranch:[''],
      companyBranch:this.fb.group({
        branchId:[''],
        branchName:[''],
        branchAddress:['']
      })
    
    });
  }
  get f(){
    return this.AddForm.controls;
  }
  

  // registrationForm=new FormGroup({
  //   emailID:new FormControl('deep'),
  //   name:new FormControl('')
  // });
//setValue for allfield and patchfiled for some value
  // loadApiData(){
  //   this.registrationForm.patchValue({
  //     emailID:'Deep',
  //     // name:'Dev'
  //   });
  // }
  
  onSubmit()
  {
    console.log("added");
    this.companyService.create(this.AddForm.value)
    .subscribe(  data =>{
        this.router.navigate(['company-list']);
    },
      // data =>console.log("Done",data),
    error => {
      alert(error);
    });

  }
}

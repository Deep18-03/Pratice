import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { ICompany } from '../company-list/company';
import { CompanyService } from '../company-list/company.service';
// import { ICompany } from './company';
@Component({
  selector: 'app-company-view',
  templateUrl: './company-view.component.html',
  styleUrls: ['./company-view.component.css']
})
export class CompanyViewComponent implements OnInit {
  pagetitle: string = "Deatil";
  companies: ICompany | undefined ;
  constructor(private companyService: CompanyService, private router: Router, private routes: ActivatedRoute) { }

  

  ngOnInit(): void {
    const id = Number(this.routes.snapshot.paramMap.get('id'));
    // this.pagetitle += `: ${id}`;
    this.companyService.getById(id).subscribe(data=>{
      this.companies=data;
    })
    // this.companies={
    //   'id':id,
    //   'emailID':"helo",
    //   'address':"sadsad",
    //   'name':'',
    //   'totalEmployee':4,
    //   'isCompanyActive':true,
    //   'totalBranch':8
    // };
    
    

    }
      
   
    
    

    //goback method route to product-list
    goBack(){
      this.router.navigate(['/company-list'])
    }
}

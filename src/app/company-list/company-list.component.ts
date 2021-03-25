import { Component, OnInit } from '@angular/core';
import { ICompany } from './company';
import { CompanyService } from './company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  tableTitle:string="Company List";
  companies:ICompany[]=[];
  errorMessage:string='';
  ngOnInit(): void {

    this.companyService.getCompany()
      .subscribe((data: ICompany[]) => {
        this.companies = data;
        console.log(data);
      });
    //   this.companyService.getCompany().subscribe({
    //   next:companies=>{
    //     this.companies=companies;
    //   },
    //   error:err =>this.errorMessage=err
    // });

  }

  deleteCompany(company: ICompany){
    this.companyService.delete(company.id).subscribe(data => {
     this.companyService.getCompany()
     .subscribe((data: ICompany[]) => {
       this.companies = data;
     });
   });
   };

   editCompany(company: ICompany): void {
    localStorage.removeItem('companyId');
    localStorage.setItem('companyId', company.id.toString());
    this.router.navigate(['company-update']);
  }

  constructor(private companyService:CompanyService,private router: Router) {}


  

}

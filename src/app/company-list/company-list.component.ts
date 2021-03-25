import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  tableTitle:string="Company List";
  companys:any[]=[
    {
      
      "id":"1",
      "email":"deepmshah113@gmail.com",
      "name":"Deep",
      "totalEmployee":10,
      "address":"Umreth",
      "isCompanyActive":true,
      "totalBranch":4,
      "companyBranch":[{
                      "branchId":"1",
                      "branchName":"Prince",
                      "address":"Umreth"
      }]

    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

export interface ICompany{
    "id":number,
    "emailID":string,
    "name":string,
    "totalEmployee":number
    "address":string,
    "isCompanyActive":true,
    "totalBranch":number,
    "companyBranch":[{
                    "branchId":number,
                    "branchName":string,
                    "address":string
                }]

}
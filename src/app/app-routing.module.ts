import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyAddComponent } from './company-add/company-add.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { CompanyUpdateComponent } from './company-update/company-update.component';

const routes: Routes = [
  {
    path:'company-list',
    component:CompanyListComponent
  },
  {
    path:'company-add',
    component:CompanyAddComponent
  },
  {
    path:'company-update',
    component:CompanyUpdateComponent
  },
  {
      path:'',
      redirectTo:'company-list',
      pathMatch:'full'
  },
  {
    path:'404',
    component: NopagefoundComponent
  },
   //WildCard  eg:Wrong url enter this will redirect to given path
  {
    path:'**',
    redirectTo:'404',//404 Error Page page Not Found
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

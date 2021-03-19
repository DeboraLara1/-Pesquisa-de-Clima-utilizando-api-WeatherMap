import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { DetailsResultComponent } from './details-result/details-result.component';


const routes: Routes = [{
  path: "", component: SearchComponent
}, {
  path: "details/:id/:name", component: DetailsResultComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

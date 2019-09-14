import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { StatPageComponent } from './stat-page/stat-page.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'stats', component: StatPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

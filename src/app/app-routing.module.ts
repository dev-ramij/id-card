import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateNewInstituteComponent } from './create-new-institute/create-new-institute.component';
import { GenerateIdCardComponent } from './generate-id-card/generate-id-card.component';


const routes: Routes = [
  { path: '', component: CreateNewInstituteComponent },
  { path: 'generate-id-card', component: GenerateIdCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

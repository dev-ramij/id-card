import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewInstituteComponent } from './create-new-institute/create-new-institute.component';
import { GenerateIdCardComponent } from './generate-id-card/generate-id-card.component';

// var name = SharedDataService.name;

const routes: Routes = [
  { path: '', component: CreateNewInstituteComponent },
  { path: 'generate-id-card/:name', component: GenerateIdCardComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  {
  
}

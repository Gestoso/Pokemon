import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TeamBuilderComponent } from './team-builder/team-builder.component';

const routes: Routes = [
  { path : 'teambuilder' , component: TeamBuilderComponent},
  { path:'main', component: MainComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'main'},
  {path: '', pathMatch: 'full', redirectTo: 'main'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { AddFormComponent } from './form/add-form/add-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';


const routes: Routes = [
{path: '', redirectTo: 'form', pathMatch: 'full'},
{path: 'form/:id', component: AddFormComponent},
{path: 'form', component: FormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

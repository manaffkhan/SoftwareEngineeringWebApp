import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListSurveyComponent } from './list-survey/list-survey.component';
import { CreateSurveyComponent} from './create-survey/create-survey.component';
import { StdDetailsComponent } from './std-details/std-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'add', component: CreateSurveyComponent },
  { path: 'detail', component: ListSurveyComponent },
  { path:'stdDetail/:id',component:StdDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

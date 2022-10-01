import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { ListSurveyComponent } from './list-survey/list-survey.component';
import { FormsModule } from '@angular/forms';
import { MarkAsteriskDirective } from './directives/mark-asterisk.directive';
import { StudentService } from './student.service';
import { HttpClientModule } from '@angular/common/http';
import { StdDetailsComponent } from './std-details/std-details.component';

const appRoutes: Routes = [
  {path:'stdDetail/:id',component:StdDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateSurveyComponent,
    ListSurveyComponent,
    MarkAsteriskDirective,
    StdDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})

  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AMSHeaderComponent } from './amsheader/amsheader.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { SeverityComponent } from './severity/severity.component';

const routes: Routes = [
  {    
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'checklist',
    component: ChecklistComponent
  },
  {
    path: 'severity',
    component : SeverityComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    AMSHeaderComponent,
    FooterComponent,
    ContentComponent,
    LoginComponent,
    ErrorComponent,
    ChecklistComponent,
    SeverityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    [RouterModule.forRoot(routes)],
    HttpClientModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

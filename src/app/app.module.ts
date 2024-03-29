import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponentComponent } from './add-component/add-component.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Register} from './Models/register'

@NgModule({
  declarations: [
    AppComponent,
    AddComponentComponent,
    TableComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,    
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule  
    
  ],
  providers: [Register],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {FormsModule} from "@angular/forms";
import {ButtonModule} from 'primeng/button';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { MyjsonComponent } from './myjson/myjson.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyjsonComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToggleButtonModule,
    FormsModule,
    ButtonModule,
    NgJsonEditorModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
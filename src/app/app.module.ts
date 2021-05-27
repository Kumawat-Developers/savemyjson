import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { MyjsonComponent } from './myjson/myjson.component';
import { NewjsonComponent } from './newjson/newjson.component';
import { ClipboardModule } from 'ngx-clipboard';
@NgModule({
  declarations: [
    AppComponent,
    MyjsonComponent,
    NewjsonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToggleButtonModule,
    FormsModule,
    ButtonModule,
    NgJsonEditorModule,
    ClipboardModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

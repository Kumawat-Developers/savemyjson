import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import { NgxUiLoaderModule } from "ngx-ui-loader";
import {ToastModule} from 'primeng/toast';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from "ng-recaptcha";
import { NotFoundComponent } from './not-found/not-found.component';
import { NotificationService } from './shared/notification.service';
@NgModule({
  declarations: [
    AppComponent,
    MyjsonComponent,
    NewjsonComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToggleButtonModule,
    FormsModule,
    ButtonModule,
    NgJsonEditorModule,
    ClipboardModule,
    NgxUiLoaderModule,
    ToastModule,
 
  ],
  providers: [NotificationService,{provide: RECAPTCHA_V3_SITE_KEY, useValue: "6Lc6KFcbAAAAADmZ84tFI2bvmLRd6arxKvOLLisr" }],
  bootstrap: [AppComponent]
})
export class AppModule { }

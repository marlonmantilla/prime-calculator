import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PrimeComponent } from './modules';

import { PrimeService } from './shared/services';

@NgModule({
  declarations: [
    AppComponent,
    PrimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    PrimeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

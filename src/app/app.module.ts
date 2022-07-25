import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { GridAlpineComponent } from './grid-alpine/grid-alpine.component';
import {AgGridModule} from "ag-grid-angular";

@NgModule({
  declarations: [
    AppComponent,
    GridAlpineComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AgGridModule
  ],
  exports: [GridAlpineComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

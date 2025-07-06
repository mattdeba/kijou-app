import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataViewModule } from 'primeng/dataview';
import { DataViewBasicDemoComponent } from './data-view-basic-demo/data-view-basic-demo.component';
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {TagModule} from "primeng/tag";
import {ProductService} from "./service/productservice";
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [
    AppComponent,
    DataViewBasicDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataViewModule,
    RatingModule,
    FormsModule,
    TagModule,
    ButtonModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataViewModule } from 'primeng/dataview';
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {TagModule} from "primeng/tag";
import {ButtonModule} from "primeng/button";
import { TableRowEditComponent } from './table-row-edit/table-row-edit.component';
import {TableModule} from "primeng/table";
import {DropdownModule} from "primeng/dropdown";
import {ToastModule} from "primeng/toast";
import {ProductService} from "./service/productservice";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    TableRowEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataViewModule,
    RatingModule,
    FormsModule,
    TagModule,
    ButtonModule,
    TableModule,
    DropdownModule,
    ToastModule,
    RippleModule,
    InputTextModule,
    BrowserAnimationsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

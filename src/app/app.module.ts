import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SnackBarComponent
  ],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    SnackBarComponent
  ]
})
export class AppModule { }

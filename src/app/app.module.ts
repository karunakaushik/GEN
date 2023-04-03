import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleTransComponent } from './allTasks/google-trans/google-trans.component';
import { HeaderComponent } from './allTasks/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleTransComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

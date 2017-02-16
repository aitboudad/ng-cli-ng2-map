import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2MapModule } from 'ng2-map';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2MapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

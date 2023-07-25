import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrComponent } from './fr/fr.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { JsondComponent } from './jsond/jsond.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';

@NgModule({
  declarations: [
    AppComponent,
    FrComponent, 
    NgforComponent, NgstyleComponent, JsondComponent, NgswitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

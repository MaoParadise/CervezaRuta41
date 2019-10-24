import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BodyComponent } from './body/body.component';
import { PromoCodeComponent } from './body/promo-code/promo-code.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BodyComponent,
    PromoCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

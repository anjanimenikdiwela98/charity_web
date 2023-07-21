import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { DonationComponent } from './components/pages/donation/donation.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    FaqComponent,
    ContactUsComponent,
    DonationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

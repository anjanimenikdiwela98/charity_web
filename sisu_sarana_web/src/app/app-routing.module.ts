import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { DonationComponent } from './components/pages/donation/donation.component';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path:'about-us',
    component:AboutUsComponent
  },
  {
    path:'blogs',
    loadChildren: () => import('./components/pages/blogs/blogs.module').then(m => m.BlogsModule)
  },
  {
    path:'events',
    loadChildren: () => import('./components/pages/events/events.module').then(m => m.EventsModule)
  },
  {
    path:'faq',
    component:FaqComponent
  },
  {
    path:'contact-us',
    component:ContactUsComponent
  },
  {
    path:'donation',
    component:DonationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import { AboutComponent } from './body/about/about.component';
import { ServiceComponent } from './body/service/service.component';
import { BlogComponent } from './body/blog/blog.component';
import { ContactComponent } from './body/contact/contact.component';


const routes: Routes = [
  { path: '' , component: HomeComponent },
  // { path: '**' , redirectTo: '/home' },
  
  
  { path: 'home' , component: HomeComponent },
  { path: 'about' , component: AboutComponent },
  { path: 'service' , component: ServiceComponent },
  { path: 'blog' , component: BlogComponent },
  { path: 'contact' , component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

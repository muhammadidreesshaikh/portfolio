import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./components/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./components/projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./components/services/services.module').then(m => m.ServicesModule)
  },
  {
    path: 'testimonials',
    loadChildren: () => import('./components/testimonials/testimonials.module').then(m => m.TestimonialsModule)
  },
  {
    path: 'support-policy',
    loadChildren: () => import('./components/support-policy/support-policy.module').then(m => m.SupportPolicyModule)
  },
  {
    path: 'terms-conditions',
    loadChildren: () => import('./components/terms-conditions/terms-conditions.module').then(m => m.TermsConditionsModule)
  },
  {
    path: 'faqs',
    loadChildren: () => import('./components/faqs/faqs.module').then(m => m.FaqsModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('./components/clients/clients.module').then(m => m.ClientsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

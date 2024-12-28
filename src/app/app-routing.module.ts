import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HomeComponent } from './components/home/home.component';

import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  // Route par défaut qui redirige vers la page d'accueil
  { path: '', component: HomeComponent },

  // Routes pour les cours
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/new', component: CourseFormComponent },
  { path: 'courses/edit/:id', component: CourseFormComponent },

  // Routes pour les contacts
  { path: 'contacts', component: ContactListComponent },
  { path: 'contacts/new', component: ContactFormComponent },
  { path: 'contacts/edit/:id', component: ContactFormComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

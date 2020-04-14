import { CourseListComponent } from './course-list/course-list.component';

import { CourseDetailsComponent } from './course-details/course-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'course-list', component: CourseListComponent },
  { path: 'course-list/:id', component: CourseDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CourseListComponent, CourseDetailsComponent]
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { CalendarComponent } from './pages/calendar/calendar.component';

const routes: Routes = [
  { path: 'todo', component: TodoComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'calendar', component: CalendarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

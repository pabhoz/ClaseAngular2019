import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './pages/todo/todo.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { CalendarComponent } from './pages/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ContactsComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

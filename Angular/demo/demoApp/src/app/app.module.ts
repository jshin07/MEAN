import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { NoteComponent } from './note/note.component';
import { TaskComponent } from './task/task.component';
import { NoteListComponent } from './note/note-list/note-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    AllUsersComponent,
    NoteComponent,
    TaskComponent,
    NoteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

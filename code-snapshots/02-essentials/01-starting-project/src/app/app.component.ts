import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { DUMMY_USERS } from './components/user/dummy-users';
import { TasksComponent } from './components/tasks/tasks.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;

  selectedName = signal('');
  selectedId = signal('');

  onSelectUser(id: string) {
    console.log("Selected user id: " +id);
    this.selectedName.set(DUMMY_USERS.find(user => user.id === id)?.name || '');
    this.selectedId.set(id);
  }

  isSelected(id: string) {
    return this.selectedId() === id;
  }

}

import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

const random_int = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  selectedUser = DUMMY_USERS[random_int];

  get imagePath() {
    return './assets/users/' + this.selectedUser.avatar;
  }

  onSelectUser() {
    const random_int = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[random_int];
    // console.log(random_int)
  }

}

import { Component, computed, Input, input, signal } from '@angular/core'; //Input is a decorator from angular, input is a special function from the library
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

  // @Input is decorator from angular
  // !: is a typescript convention to tell the compiler that the variable will be initialized later
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  
  // signal, so include (brackets) again
  avatar = input.required<string>();
  name = input<string>('NAME');

  get imagePath() {
    return './assets/users/' + this.avatar();
  }


  // pass initial value
  // selectedUser = signal(DUMMY_USERS[random_int]);
  // // computed signal, all signals are called as method in html
  // imagePath = computed(() => './assets/users/' + this.selectedUser().avatar);

  // get imagePath() {
  //   return './assets/users/' + this.selectedUser.avatar;
  // }

  onSelectUser() {
    // const random_int = Math.floor(Math.random() * DUMMY_USERS.length);
    // // this.selectedUser = DUMMY_USERS[random_int];
    // this.selectedUser.set(DUMMY_USERS[random_int]);
    // // console.log(random_int)
  }

}

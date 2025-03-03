import { Component, computed, EventEmitter, Input, input, output, Output, signal } from '@angular/core'; //Input is a decorator from angular, input is a special function from the library
import { DUMMY_USERS } from './dummy-users';
import { type User } from './user.model';

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

  // @Input({required: true}) id !: string;
  @Input({required: true}) user!: User;

  // @Output() select = new EventEmitter<string>();

  select = output<string>();
  onSelectUser2() {this.select.emit(this.user.id);}

  @Input() selected : boolean = false;

  
  // signal, so include (brackets) again
  // avatar = input.required<string>();
  // name = input<string>('NAME');

  // imagePath = computed(() => {
  //   return './assets/users/' + this.avatar();
  // })


  // pass initial value
  // selectedUser = signal(DUMMY_USERS[random_int]);
  // // computed signal, all signals are called as method in html
  // imagePath = computed(() => './assets/users/' + this.selectedUser().avatar);

  // get imagePath() {
  //   return './assets/users/' + this.selectedUser.avatar;
  // }
  get imagePath() {
    return './assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    // const random_int = Math.floor(Math.random() * DUMMY_USERS.length);
    // // this.selectedUser = DUMMY_USERS[random_int];
    // this.selectedUser.set(DUMMY_USERS[random_int]);
    // // console.log(random_int)
  }

}

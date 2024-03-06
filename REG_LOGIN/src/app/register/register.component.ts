import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  register() {
    // Simulate registration (store data locally or use any service)
    const userData = {
      username: this.username,
      email: this.email,
      password: this.password
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    console.log('Registered Successfully');
    this.router.navigate(['/login']);
  }
}

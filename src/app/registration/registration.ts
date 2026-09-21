import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  imports: [FormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css'
})
export class Registration {

  name = '';
  email = '';
  password = '';

  register() {

    if (!this.name || !this.email || !this.password) {
      alert('Please fill all fields');
      return;
    }

    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    alert('Registration successful');
  }
}
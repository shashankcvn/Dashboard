import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      photo: [''], 
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['']
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      // Perform actions with form data
      console.log(this.profileForm.value);
}

  }
}


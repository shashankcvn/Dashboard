import { Component } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  myForm: FormGroup;

 
  constructor(private _fb: FormBuilder, private _userservice : UsersService ,
     private  _dialog : DialogRef<LogInComponent> ) {
    this.myForm = this._fb.group({
      // define your form controls here
      FirstName:['',[Validators.required, Validators.maxLength(25)]],
      LastName: ['',[Validators.required, Validators.maxLength(15)]],
      Username: ['', [Validators.required, Validators.maxLength(25),Validators.pattern(/^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,}$/)]],
      Password: ['', [Validators.required, Validators.maxLength(15)]],
    });

    }

    submit(){
      if (this.myForm.valid) {
        // perform actions with form data
        console.log(this.myForm.value);
        this.myForm.reset();
        
       
        
        this._userservice.addusers(this.myForm.value).subscribe({
          next :(_val : any) =>{
            
            this._dialog.close();

          },
          error : (err : any) => {

          }
        })

      }
      
    }

    get user(){
      return this.myForm.get('Username')
    }
  }



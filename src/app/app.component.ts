import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { LogInComponent } from './log-in/log-in.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UsersService } from './services/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'UserDashboard';

  constructor(private _dialog : MatDialog,  private _userservice : UsersService){

  }

 
  
  openEditForm(){
    this._dialog.open(LogInComponent);


  }


 
  
}
   


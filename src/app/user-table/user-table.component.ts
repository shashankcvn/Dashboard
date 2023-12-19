import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent  implements OnInit{

  constructor(private _userservice : UsersService ){

  }

  getusers() {
    throw new Error('Method not implemented.');
  }

 ELEMENT_DATA: any  = [] ;

  displayedColumns: any[] = ['id', 'name', 'username', 'email'];
  dataSource !: MatTableDataSource<Element>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(){
  this.fetchData();
  }

  fetchData(){
    this._userservice.getusers().subscribe(data =>{
        this.ELEMENT_DATA = data

        console.log(this.ELEMENT_DATA)

        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA)

        this.dataSource.paginator = this.paginator
     
        });
  }

}
  



export interface Element {
  id: string;
  name: number;
  username: number;
  email: string;
}


      
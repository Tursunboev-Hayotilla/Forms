import { Component, OnInit } from '@angular/core';
import { CerateProgrammer } from '../../models/createprog';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrl: './get-by-id.component.css',
})
export class GetByIdComponent implements OnInit {
  myId!: number;
  isEmpty:boolean = false;
  programmer : CerateProgrammer = {
    fullName: '',
    about: '',
    password: '',
    username: '',
    field: 0,
  };
  constructor(private http: CrudService) {
    this.getById();
  }
  ngOnInit(): void {
    this.getById();
  }
 getById() {
  this.http.getById(this.myId).subscribe({
    next: (data) => {
        this.programmer = data;
        this.isEmpty = true
        console.log(data);
     
    },
    error: (err) => {
      console.log(err);
    },
  });
}
}

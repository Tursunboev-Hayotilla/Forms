import { Component } from '@angular/core';
import { CerateProgrammer } from '../../models/createprog';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
})
export class UpdateComponent {
  myId!: number;
  isEmpty:boolean = false;
  programmer: CerateProgrammer = {
    fullName: '',
    about: '',
    password: '',
    username: '',
    field: 0,
  };

  setValue: CerateProgrammer = {
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
        this.isEmpty = true
        this.programmer = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  setUser() {
    this.http.Update(this.myId, this.setValue).subscribe({
      next: (data) => {
        this.programmer = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

import { Component } from '@angular/core';
import { CrudServiceService } from '../../services/crud-service.service';
import { CreateProgrammer } from '../../models/create-programmer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
})
export class UpdateComponent {
  myId!: number;
  isEmpty: boolean = false;
  programmer: CreateProgrammer = {
    fullName: '',
    about: '',
    password: '',
    username: '',
    field: 0,
  };

  setValue: CreateProgrammer = {
    fullName: '',
    about: '',
    password: '',
    username: '',
    field: 0,
  };
  constructor(private http: CrudServiceService) {
    this.getById();
  }
  ngOnInit(): void {
    this.getById();
  }
  getById() {
    this.http.getById(this.myId).subscribe({
      next: (data) => {
        this.isEmpty = true;
        this.programmer = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  setProgrammer() {
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

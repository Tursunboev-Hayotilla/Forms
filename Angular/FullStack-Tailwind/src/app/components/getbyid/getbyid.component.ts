import { Component } from '@angular/core';
import { CrudServiceService } from '../../services/crud-service.service';
import { Programmer } from '../../models/programmer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-getbyid',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './getbyid.component.html',
  styleUrl: './getbyid.component.css'
})
export class GetbyidComponent {
  myId!: number;
  isEmpty:boolean = false;
  programmer : Programmer = {
    id:0,
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
    next: (data:any) => {
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

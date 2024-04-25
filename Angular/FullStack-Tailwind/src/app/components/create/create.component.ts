import { Component } from '@angular/core';
import { CreateProgrammer } from '../../models/create-programmer';
import { CrudServiceService } from '../../services/crud-service.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  resultData?: CreateProgrammer;
  isSubmitted: boolean = false;

  setValue: CreateProgrammer = {
    fullName: '',
    about: '',
    password: '',
    username: '',
    field: 0,
  };
  constructor(private crudService: CrudServiceService,private router: Router) {}

  createProgrammer(data: CreateProgrammer) {
    this.crudService.create(data).subscribe({
      next: (result:any) => {
        this.resultData = result;
        console.log(result);
        this.isSubmitted = true;
      
      },
      error: (err:any) => {
        console.log(`Error: ${err}`);
      },
    });
  }

  setProgrammer() {
    this.createProgrammer(this.setValue);
    this.router.navigateByUrl("/getall");
  }
}

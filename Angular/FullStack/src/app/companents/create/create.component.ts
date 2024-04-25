import { CrudService } from './../../services/crud.service';
import { CerateProgrammer } from './../../models/createprog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  resultData?: CerateProgrammer;
  isSubmitted: boolean = false;

  setValue: CerateProgrammer = {
    fullName: '',
    about: '',
    password: '',
    username: '',
    field:0,
  };

  constructor(private crudService: CrudService) {}

  createProgrammer(data: CerateProgrammer) {
    this.crudService.create(data).subscribe({
      next: (result) => {
        this.resultData = result;
        console.log(result);
        this.isSubmitted = true;
      },
      error: (err) => {
        console.log(`Error: ${err}`);
      },
    });
  }

  setProgrammer() {
    this.createProgrammer(this.setValue);
  }
}

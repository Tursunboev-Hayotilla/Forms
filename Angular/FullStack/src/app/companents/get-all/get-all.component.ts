import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../services/crud.service';
import { Programmer } from './../../models/programmer';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css'],
})
export class GetAllComponent implements OnInit {
  programmers: Programmer[] = [];

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.getAllProgrammers();
  }

  getAllProgrammers(): void {
    this.crudService.getAll().subscribe({
      next: (data) => {
        this.programmers = data;
      },
      error: (error) => {
        console.log('Error:', error);
      },
    });
  }

  deleteProgrammer(id: number): void {
    this.crudService.delete(id).subscribe({
      next: () => {
        console.log(`Programmer with ID ${id} deleted successfully`);
        this.getAllProgrammers();
      },
      error: (error) => {
        console.log('Error deleting programmer:', error);
      },
    });
  }
}

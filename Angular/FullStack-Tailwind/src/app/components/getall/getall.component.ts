import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../../services/crud-service.service'; // Correct import path
import { Programmer } from '../../models/programmer';

@Component({
  selector: 'app-getall',
  templateUrl: './getall.component.html',
  styleUrls: ['./getall.component.css'], // Fixed the typo here
})
export class GetallComponent implements OnInit {
  programmers: Programmer[] = [];

  constructor(private crudService: CrudServiceService) {}

  ngOnInit(): void {
    this.getAllProgrammers();
  }

  getAllProgrammers(): void {
    this.crudService.getAll().subscribe({
      next: (data: Programmer[]) => {
        this.programmers = data;
        console.log(data);
      },
      error: (error: any) => {
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

import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from './card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'InputProject';
  @Input()
  card!: Card;
}

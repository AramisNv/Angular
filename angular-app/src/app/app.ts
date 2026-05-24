import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MicroserviceModule } from './microservice/microservice.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MicroserviceModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-app');
}

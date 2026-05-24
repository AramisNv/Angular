import { Component, OnInit, signal } from '@angular/core';
import { MicroserviceService } from './microservice.service';

@Component({
  selector: 'app-microservice',
  standalone: false,
  templateUrl: './microservice.component.html',
  styleUrls: ['./microservice.component.css']
})
export class MicroserviceComponent implements OnInit {
  message = signal<string>('');
  error = signal<string>('');
  loading = signal<boolean>(false);

  constructor(private microserviceService: MicroserviceService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.loading.set(true);
    this.error.set('');
    this.message.set('');

    this.microserviceService.getMessage().subscribe({
      next: (response) => {
        this.message.set(response.body?.message || '');
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Failed to connect. Please check if the Laravel server is running.');
        this.loading.set(false);
        console.error(err);
      }
    });
  }
}

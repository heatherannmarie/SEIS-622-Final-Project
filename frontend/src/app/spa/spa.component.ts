import { Component } from '@angular/core';
import { ServiceMenuService } from '../service-menu.service';

@Component({
  selector: 'app-spa',
  standalone: false,
  templateUrl: './spa.component.html',
  styleUrl: './spa.component.css'
})
export class SpaComponent {
  services: any[] = [];

  constructor(private serviceMenu: ServiceMenuService) { }

  ngOnInit(): void {
    this.loadServices('/text/spa-services.json');
  }

  loadServices(filePath: string): void {
    this.serviceMenu.getServices(filePath).subscribe(
      (data) => {
        this.services = data;
        console.log(this.services); // Check if the data is loaded correctly
      },
      (error) => {
        console.error('Error loading services:', error);
      }
    );
  }
  toggleServiceDescription(service: any): void {
    // Toggle visibility of the service description
    service.showDescription = !service.showDescription;
  }
}

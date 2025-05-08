import { Component, OnInit } from '@angular/core';
import { ServiceMenuService } from '../service-menu.service';

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services: any[] = [];

  constructor(private serviceMenu: ServiceMenuService) { }

  ngOnInit(): void {
    this.loadServices('/text/salon-services.json');
  }

  loadServices(filePath: string): void {
    this.serviceMenu.getServices(filePath).subscribe(
      (data) => {
        this.services = data;
        console.log(this.services);
      },
      (error) => {
        console.error('Error loading services:', error);
      }
    );
  }
  toggleServiceDescription(service: any): void {
    service.showDescription = !service.showDescription;
  }
}

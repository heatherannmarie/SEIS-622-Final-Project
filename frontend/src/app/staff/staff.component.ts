import { Component } from '@angular/core';
import { StaffBioService } from '../staff-bio.service';

@Component({
  selector: 'app-staff',
  standalone: false,
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.css'
})
export class StaffComponent {
  employees: any[] = [];

  constructor(private staffBio: StaffBioService) {

  }

  ngOnInit(): void {
    this.loadEmployees('/text/staff-bios.json');
    console.log(this.employees);
  }

  loadEmployees(filePath: string): void {
    this.staffBio.getStaffBio(filePath).subscribe(
      (data: any[]) => {
        this.employees = data;
        console.log(this.employees);
      },
      (error: any) => {
        console.error("Error loading staff bios:", error);
      }
    );
  }

  toggleDescription(employee: any): void {
    // Toggle visibility of the description for the clicked employee
    employee.showDescription = !employee.showDescription;
  }
}

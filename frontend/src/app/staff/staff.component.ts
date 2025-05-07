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
    this.loadEmployees('/assets/text/staff-bios.json');
    console.log(this.employees);
  }

  loadEmployees(filePath: string): void {
    this.staffBio.getStaffBio(filePath).subscribe(
      (data) => {
        console.log("Data received", data)
        this.employees = data;
        console.log(this.employees);
      },
      (error) => {
        console.error("Error loading staff bios:", error);
      }
    );
  }
}

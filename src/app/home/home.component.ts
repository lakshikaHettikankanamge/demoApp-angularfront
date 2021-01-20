import { Component, OnInit } from '@angular/core';
import { MyorganizationsService } from '../shared/myorganizations.service';
import { OrganizationModel } from '../shared/OrganizationModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  organizations: Array<OrganizationModel> = [];
  constructor(
    private organizationService: MyorganizationsService,
    private router: Router
  ) {
    this.organizationService.getOrganizations().subscribe(organization => {
      this.organizations = organization;
    });
  }

  ngOnInit(): void {}

  viewUsers(id: number) {
    console.log(`get users`);
    // this.organizationService.getOrganizationUsers(id).subscribe (
    //   response => {
    //     console.log(response);
    //     this.message = `Delete of Todo ${id} Successful!`;
    //     this.refreshTodos();
    //   }
    // )
    this.router.navigate(['organizations', id]);
  }

  createOrganization() {
    console.log(`create `);
    this.router.navigate(['organizations']);
  }

  createOrganizationUsers(id: number) {
    this.router.navigate(['createuser', id]);
  }
}

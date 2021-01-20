import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyorganizationsService } from '../../shared/myorganizations.service';
import { throwError } from 'rxjs';
import { UserModel } from '../../shared/UserModel';

export class User {
  constructor(public id: number, public email: string, public status: string) {}
}

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  orgId: number;
  users: Array<UserModel> = [];

  constructor(
    private myOrganizationService: MyorganizationsService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.orgId = this.activateRoute.snapshot.params.orgId;
  }

  ngOnInit(): void {
    this.myOrganizationService.getOrganizationUsers(this.orgId).subscribe(
      data => {
        this.users = data;
        console.log(this.orgId);
      },
      error => {
        throwError(error);
      }
    );
  }
}

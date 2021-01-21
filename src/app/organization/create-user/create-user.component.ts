import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MyorganizationsService } from 'src/app/shared/myorganizations.service';
import { CreateUserPayload } from './createuserPayload';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  CreateUserPayload: CreateUserPayload;
  createUserForm: FormGroup;
  orgId: number;

  constructor(
    private router: Router,
    private myOrganizationService: MyorganizationsService,
    private activateRoute: ActivatedRoute
  ) {
    this.orgId = this.activateRoute.snapshot.params.orgId;
    this.CreateUserPayload = {
      email: '',
      status: 'pending'
    };
  }

  ngOnInit(): void {
    this.createUserForm = new FormGroup({
      email: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
    });
  }

  saveuser() {
    this.CreateUserPayload.email = this.createUserForm.get('email')!.value;

    // this.CreateUserPayload.status = this.createUserForm.get(
    //   'organizationDescription'
    // )!.value;

    this.myOrganizationService
      .createOrganizationUsers(this.CreateUserPayload, this.orgId)
      .subscribe(
        data => {
          this.router.navigateByUrl('/home');
        },
        error => {
          throwError(error);
        }
      );
  }

  discardUser() {
    this.router.navigateByUrl('/home');
  }
}

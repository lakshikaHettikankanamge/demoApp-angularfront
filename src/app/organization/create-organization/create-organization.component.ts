import { Component, OnInit } from '@angular/core';
import { OrganizationPayload } from './OrganizationPayload';
import { Router } from '@angular/router';
import { MyorganizationsService } from '../../shared/myorganizations.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.css']
})
export class CreateOrganizationComponent implements OnInit {
  organizationPayload: OrganizationPayload;
  createOrganizationForm: FormGroup;

  constructor(
    private router: Router,
    private myorganizations: MyorganizationsService
  ) {
    this.organizationPayload = {
      name: '',
      description: ''
    };
  }

  ngOnInit(): void {
    this.createOrganizationForm = new FormGroup({
      organizationName: new FormControl('', Validators.required),
      organizationDescription: new FormControl('', Validators.required)
    });
  }

  saveorgaization() {
    this.organizationPayload.name = this.createOrganizationForm.get(
      'organizationName'
    )!.value;

    this.organizationPayload.description = this.createOrganizationForm.get(
      'organizationDescription'
    )!.value;

    this.myorganizations.createOrganization(this.organizationPayload).subscribe(
      data => {
        this.router.navigateByUrl('/home');
      },
      error => {
        throwError(error);
      }
    );
  }
}

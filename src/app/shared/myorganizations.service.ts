import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrganizationModel } from './OrganizationModel';
import { User } from '../organization/view-users/view-users.component';
import { UserModel } from './UserModel';
import { OrganizationPayload } from '../organization/create-organization/OrganizationPayload';
import { CreateUserPayload } from '../organization/create-user/createuserPayload';

@Injectable({
  providedIn: 'root'
})
export class MyorganizationsService {
  constructor(private http: HttpClient) {}

  getOrganizations(): Observable<Array<OrganizationModel>> {
    return this.http.get<Array<OrganizationModel>>(
      'http://localhost:8080/api/user/myorganizations'
    );
  }

  getOrganizationUsers(orgId: number): Observable<Array<UserModel>> {
    return this.http.get<Array<UserModel>>(
      'http://localhost:8080/api/user/myorganizations/' + orgId
    );
  }

  createOrganization(
    OrganizationPayload: OrganizationPayload
  ): Observable<any> {
    return this.http.post(
      'http://localhost:8080/api/user/myorganizations/',
      OrganizationPayload
    );
  }

  createOrganizationUsers(
    CreateUserPayload: CreateUserPayload,
    orgId: number
  ): Observable<any> {
    return this.http.post(
      'http://localhost:8080/api/user/myorganizations/' + orgId,
      CreateUserPayload
    );
  }
}

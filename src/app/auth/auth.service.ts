import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { AuthMutations } from '@app/@graphql/mutations/auth';
import { Observable } from 'rxjs';
import { FetchResult } from 'apollo-link';
import { Router } from '@angular/router';
import { SettingsQueries } from '@app/@graphql/queries/settings';
import { PermissionsQueries } from '@app/@graphql/queries/permissions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apollo: Apollo, private router: Router) {}

  login(credentials: any): Observable<FetchResult<any>> {
    return this.apollo.query({
      query: AuthMutations.login,
      variables: credentials,
      fetchPolicy: 'no-cache',
    });
  }

  getUserPermissions(): Observable<FetchResult<any>> {
    return this.apollo.query({
      query: PermissionsQueries.userPermissionGrants,
      fetchPolicy: 'no-cache',
    });
  }

  getSettings(): Observable<FetchResult<any>> {
    return this.apollo.query({
      query: SettingsQueries.settings,
      fetchPolicy: 'no-cache',
    });
  }

  logout(): Observable<FetchResult<any>> {
    return this.apollo.query({
      query: AuthMutations.logout,
      variables: {},
      fetchPolicy: 'no-cache',
    });
  }

  isLoggedIn() {
    const token = localStorage.getItem('auth_app_token');

    if (token) return true;

    // const isExpired = check if token is expired

    // return !isExpired;
  }
}

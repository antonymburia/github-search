import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Repos } from '../classes/repos';
import { UserData } from '../classes/user-data';

@Injectable({
  providedIn: 'root'
})
export class UserSearchService {
  user: UserData[] = [];

  apiURL = 'https://api.github.com/users/';
  token = `${environment.token}`

  constructor(public http: HttpClient) { }

  usersearch(search: string) {

    return new Promise((resolve, reject) => {

      this.user = [];

      this.http.get<any>(this.apiURL + search + '?' + this.token).toPromise().then(
        (results: any) => {
          this.user.push(results);
          resolve("");
        },
        (error) => {
          reject("enter something ");
        }

      );

    });

  }

}



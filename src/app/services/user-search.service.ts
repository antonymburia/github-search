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
  repo: Repos[] = [];

  apiURL = 'https://api.github.com/users/';
  token = `?access_token=${environment.token}`

  constructor(public http: HttpClient) { }

  usersearch(search: string) {
    interface data {
      login: string;
      avatar_url: string;
      following: string;
      followings: string;
      public_repos: string;
      name: any;
      company: any;
      location: any;
      followers: any;
      logged_at: Date;
      email: any;
      bio: any;
      created_at: Date;
    }

  return new Promise((resolve,reject)=>{

    this.user=[];

    this.http.get<data>(this.apiURL+ search + this.token).toPromise().then(
      (results) =>{
       this.user.push(results);
        resolve();
         },
          (error)=>{
            reject();
      }

    );
  
  });

}

}



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repos } from '../classes/repos'; 
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class RepoSearchService {
  repo:Repos[]=[];
  apiURL= 'https://api.github.com/users/';
  token=`?access_token=${environment.token}`

  constructor(public http:HttpClient) { }
  getRepositories(search:string):Observable<any>{
    return this.http.get(this.apiURL + search+ '/repos'+ this.token);
  }
}

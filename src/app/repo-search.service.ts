import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repos } from './repos';
import { observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RepoSearchService {

  constructor(public http:HttpClient) { }
}

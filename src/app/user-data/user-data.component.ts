import { Component, OnInit } from '@angular/core';
import { UserData } from '../classes/user-data';
import { Repos } from '../classes/repos';
import { RepoSearchService } from '../services/repo-search.service';
import { UserSearchService } from '../services/user-search.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  user!: UserData[];
  myrepo!: Repos;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { RepoSearchService } from '../services/repo-search.service';
import { Repos } from '../classes/repos';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  myrepo!:Repos[];

  constructor(public reposearch:RepoSearchService) { }
  userinput(){
    
  }

  ngOnInit(): void {
  }

}

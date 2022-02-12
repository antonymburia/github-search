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
  gituser!: UserData[];
  myrepo!: Repos;

  constructor(public serviceusersearch: UserSearchService, public reposearch: RepoSearchService) { }

  userinput(search: any) {
    this.serviceusersearch.usersearch(search).then(
      (succeed) =>{
        this.gituser =this.serviceusersearch.user;
      },
      (error)=>{
        alert(error);
      }
    );
    this.reposearch.getRepositories(search).subscribe(
      (success)=>{
        this.myrepo=success
        return(this.myrepo)
      }
    )

  }

  ngOnInit(): void {
    this.userinput('antonymburia');
  }

}

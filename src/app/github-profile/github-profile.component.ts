import { Component, OnInit } from '@angular/core';
import { GithubService } from "../github.service";

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  user: any;
  username: string;
  repos: any[];

  constructor(private githubService: GithubService) {
    this.user = false;
  }

  searchUser() {
    this.githubService.updateUser(this.username);

    this.githubService.getUser().subscribe(
      (user) => {
        this.user = user;
      }
    );

    this.githubService.getRepos().subscribe(
      (repos) => {
        this.repos = repos;
      }
    );
  }

  ngOnInit() {
  }

}

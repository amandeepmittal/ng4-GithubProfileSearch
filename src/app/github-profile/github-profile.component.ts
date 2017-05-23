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

  constructor(private githubService: GithubService) {
    this.githubService.getUser().subscribe(
      (user) => {
        this.user = user;
      }
    );
  }

  //searchUser() {
  //
  //}

  ngOnInit() {
  }

}

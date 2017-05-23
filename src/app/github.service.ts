import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GithubService {
  private username: string;
  private clientId = '162b6220302bba24b794';
  private clientSecret = 'b2859870711cdeda2419ae6662f378c65aa615c9';

  url = 'http://api.github.com/users/';

  // private clientId = '<client_id>';
  // private clientSecret = '<client_secret>';

  constructor(private http: Http) {
    console.log('Github Service Running...!');
    this.username = 'amandeepmittal';
    console.log('Default Username: ' + this.username);
  }

  getUser() {
    if(this.username) {
      return this.http.get(this.url + this.username +  '?client_id=' + this.clientId  + '&client_secret=' + this.clientSecret)
        .map((res) => res.json());
    }
  }

}

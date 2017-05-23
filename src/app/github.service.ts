import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class GithubService {
  private username: string;
  private clientId = '162b6220302bba24b794';
  private clientSecret = 'b2859870711cdeda2419ae6662f378c65aa615c9';

  url = 'http://api.github.com/users/';

  // private clientId = '<client_id>';
  // private clientSecret = '<client_secret>';

  constructor(private http: Http) {
    this.username = '';
  }

  private handleError(error: any) {

    if (error.status === 401) {
      return Observable.throw(error.status);
    } else {
      return Observable.throw(error.status || 'Server error');
    }
  }

  getUser() {
    if(this.username) {
      return this.http.get(this.url + this.username +  '?client_id=' + this.clientId  + '&client_secret=' + this.clientSecret)
        .map((res) => res.json())
        .catch(this.handleError);
    }
  }

  getRepos() {
    if(this.username) {
      return this.http.get(this.url + this.username + '/repos?client_id=' + this.clientId + '&client_secret=' + this.clientSecret)
        .map((res) => res.json())
        .catch(this.handleError);
    }
  }

  updateUser(username: string) {
    this.username = username;
  }

}

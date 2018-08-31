import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GitHubResponse } from './github-response';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _siteURL = 'https://github-contributions-api.now.sh/v1/';

  constructor(private _http: HttpClient) { }

  getData(username) : Observable<GitHubResponse> {
    return this._http.get<GitHubResponse>(this._siteURL + username)
      //.do(data => console.log('All : ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log('ApiService: ' + err.message);
    return Observable.throw(err.message);
  }
}

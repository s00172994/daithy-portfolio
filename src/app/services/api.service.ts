import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GitHubResponse } from './github-response';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { TwitterResponse } from './twitter-response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _gitHubBaseURL = 'https://github-contributions-api.now.sh/v1/';
  private _twitterCDNBaseURL = 'https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=';
  private proxyURL = "https://cors-anywhere.herokuapp.com/";

  constructor(private _http: HttpClient) { }

  getData(username) : Observable<GitHubResponse> {
    return this._http.get<GitHubResponse>(this._gitHubBaseURL + username)
      //.do(data => console.log('All : ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log('ApiService: ' + err.message);
    return Observable.throw(err.message);
  }

  getFollowers(username) : Observable<TwitterResponse> {
    return this._http.get<TwitterResponse>(this.proxyURL + this._twitterCDNBaseURL + username)
    //.do(data => console.log('All : ' + JSON.stringify(data)))
    .catch(this.handleError);
  }
}

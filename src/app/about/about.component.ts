import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { GitHubResponse } from '../services/github-response';
import { TwitterResponse } from '../services/twitter-response';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [ApiService]
})
export class AboutComponent implements OnInit {

  @Input() githubData: GitHubResponse;
  @Input() contributions: number;
  @Input() twitterData: TwitterResponse;
  errorMessage: string;

  constructor(private _apiService: ApiService) {
  }

  ngOnInit() {
    this.getGitHubData('s00172994');
    this.getFollowerData('Daithyi');
  }

  getGitHubData(username: string): boolean {
    this._apiService.getData(username).subscribe(githubData => {
      this.githubData = githubData;
      console.log('githubData: ' + this.githubData + " GitHub data successfully obtained!");
      this.getContributions();
    },
      error => this.errorMessage = <any>error);
    return false;
  }

  getContributions() {
    console.log("Calculating contributions from https://github-contributions.now.sh/ ...");
    this.contributions = 0;
    for (let element of this.githubData.contributions) {
      this.contributions += element.count;
    }
    console.log(this.contributions.toString() + "... done!");
  }

  getFollowerData(username: string) : boolean {
    this._apiService.getFollowers(username).subscribe(followerData => {
      this.twitterData = followerData[0];
      console.log('twitterData: ' + this.twitterData + " Twitter data successfully obtained!");
      console.log('Follower count: ' + this.twitterData.followers_count);
    },
      error => this.errorMessage = <any>error);
    return false;
  }

}

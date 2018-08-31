import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { GitHubResponse } from '../services/github-response';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [ApiService]
})
export class AboutComponent implements OnInit {

  @Input() githubData: GitHubResponse;
  @Input() contributions: number;
  errorMessage: string;

  constructor(private _apiService: ApiService) {
  }

  ngOnInit() {
    this.getGitHubData('s00172994');
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

}

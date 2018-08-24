import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private goToURL(inputURL: string) {
    window.open(inputURL, "_blank");
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    this.loadHeadScript('../assets/js/modernizr.js');
    this.loadHeadScript('../assets/js/pace.min.js');
    this.loadBodyScript('../assets/js/jquery-3.3.1.min.js');
    this.loadBodyScript('../assets/js/plugins.js');
    this.loadBodyScript('../assets/js/main.js');
  }

  private loadHeadScript(url: string) {
    const header = <HTMLHeadElement> document.head;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    header.appendChild(script);
  }

  private loadBodyScript(url : string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
}

import { Component, OnInit } from '@angular/core';
import * as Particles from 'particlesjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Particles.init({
      selector: '.particles-background',
      color: '#FFFFFF',
      connectParticles: false,
      responsive: [{
        breakpoint: 800,
        options: {
          color: '#FFFFFF',
          maxParticles: 80,
          connectParticles: false
        }
      },{
        breakpoint: 320,
        options: {
          color: '#FFFFFF',
          maxParticles: 25,
          connectParticles: false
        }
      }]
    });
  }

}

import { Component, OnInit } from '@angular/core';
import * as Particles from 'particlesjs';
import * as $ from 'jquery';

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

    this.socialIconInit();
  }

  private socialIconInit() {
    $(".facebook").hover(function () {$(".social-container-wrap").toggleClass("color-facebook")});
    $(".twitter").hover(function () {$(".social-container-wrap").toggleClass("color-twitter")});
    $(".github").hover(function () { $(".social-container-wrap").toggleClass("color-github") });
    $(".linkedin").hover(function () { $(".social-container-wrap").toggleClass("color-linkedin") });
    $(".gamejolt").hover(function () {$(".social-container-wrap").toggleClass("color-gamejolt")});
    $(".itchio").hover(function () {$(".social-container-wrap").toggleClass("color-itchio")});
  }

}

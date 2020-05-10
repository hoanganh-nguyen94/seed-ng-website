import {AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {gsap, DrawSVGPlugin, MorphSVGPlugin, Power2} from 'gsap/all';

@Component({
  selector: 'spaceship-frame',
  templateUrl: './spaceship-frame.component.html',
  styleUrls: ['./spaceship-frame.component.scss']
})
export class SpaceshipFrameComponent implements OnInit, AfterViewInit {

  timeline: any;

  spaceShip = {
    rockett: '#rockett',
    eko_2_: '#eko_2_',
    smallrocket__left_1_: '#smallrocket__left_1_',
    smallrocket__right_3_: '#smallrocket__right_3_',
    socialmedia__left_3_: '#socialmedia__left_3_'
  };


  constructor(private zone: NgZone) {

  }

  ngOnInit(): void {
    gsap.registerPlugin(DrawSVGPlugin);
    this.timeline = gsap.timeline();

  }

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      const cDrawable = '.drawable';
      const {rockett, eko_2_, smallrocket__left_1_, smallrocket__right_3_} = this.spaceShip;

      const mergeSpaceShip = [rockett, eko_2_, smallrocket__left_1_, smallrocket__right_3_];

      this.timeline
        .from(cDrawable, {drawSVG: 0, duration: 2.5})
        .from(mergeSpaceShip, {opacity: 0, duration: 1})
        .from(mergeSpaceShip, {y: -100, duration: 2}, '-=0.7');

    });
  }


  nextView(step: string) {

    const {socialmedia__left_3_, smallrocket__right_3_} = this.spaceShip;

    console.log(step);
    switch (step) {
      case 'leftSocialMedia':
        this.timeline
          .to(socialmedia__left_3_, {opacity: 0, drawSVG: 0, duration: 1.5})
          .to('#socialmedia__left', {opacity: 1, duration: 0})
          .from('#socialmedia__left', {x: 65, duration: 1.5});
        break;
      case 'rightYandex':
        this.timeline
          .to('#yandex__right_1_', {opacity: 0, drawSVG: 0, duration: 1.5})
          .to('#yandex__right', {opacity: 1, duration: 0})
          .from('#yandex__right', {x: -65, duration: 1.5});
        break;
        //todo load left and right satelite
      case 'satelite':
        this.timeline
          .to(['#_x32_satelite__right_4_', '#_x32_satelite__left_1_'], {opacity: 0, drawSVG: 0, duration: 1.5})
          .to(['#_x32_satelite__left_1_', '#_x32_satelite__right'], {opacity: 1, duration: 0})
          .from('#_x32_satelite__left_1_', {x: 165, duration: 1.5}, '-=1.5')
          .from('#_x32_satelite__right', {x: -65, y: 30, duration: 1.5})
        ;

        break;
    }

  }
}

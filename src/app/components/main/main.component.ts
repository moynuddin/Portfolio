import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import VanillaTilt from 'vanilla-tilt';
import aos from 'aos';
import Typed from 'typed.js/src/typed.js';
import TypeIt from 'typeit';
import {
  faGithub,
  faInstagramSquare,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, AfterViewInit {
  @ViewChild('subtitle') subtitle: ElementRef;
  @ViewChild('graphic') graphic: ElementRef;
  @ViewChild('title') title: ElementRef;
  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;
  faInstagramSquare = faInstagramSquare;
  options: any;
  typed: any;
  constructor() {}

  ngOnInit(): void {
    aos.init({
      once: true,
    });
  }

  ngAfterViewInit() {
    new TypeIt(this.subtitle.nativeElement, {
      speed: 50,
      loop: true,
    })
      .type('hi my name is Moinuddin')
      .move('START')
      .move(1)
      .delete(1)
      .type('H')
      .move('END')
      .type('.')
      .pause(200)
      .empty()
      .type('I Am a frontend Developer!')
      .move('START')
      .move(3)
      .delete(1)
      .type('a')
      .move(5)
      .delete(1)
      .type('F')
      .move('END')
      .type('!')
      .empty()
      .type('I build web application')
      .pause(400)
      .delete(15)
      .move('END')
      .type('interactive web application')
      .move('END')
      .type('s')
      .pause(500)
      .go();
    VanillaTilt.init(this.graphic.nativeElement);
  }
  downloadFileHandler() {
    window.open('../../../assets/docs/Moinuddin-Resume.pdf');
    // saveAs(url, name);
  }
}

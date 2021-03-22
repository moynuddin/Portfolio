import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import VanillaTilt from 'vanilla-tilt';
import aos from 'aos';
// import anime from 'animejs/lib/anime.es.js';
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
  @ViewChild('graphic') graphic: ElementRef;
  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;
  faInstagramSquare = faInstagramSquare;
  constructor() {}

  ngOnInit(): void {
    aos.init({
      once: true,
    });
  }

  ngAfterViewInit() {
    VanillaTilt.init(this.graphic.nativeElement);
  }
  downloadFileHandler() {
    window.open('../../../assets/docs/Moinuddin-Resume.pdf');
    // saveAs(url, name);
  }
}

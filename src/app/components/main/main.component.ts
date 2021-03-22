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

    VanillaTilt.init(this.graphic.nativeElement);
  }
  downloadFileHandler() {
    window.open('../../../assets/docs/Moinuddin-Resume.pdf');
    // saveAs(url, name);
  }
}

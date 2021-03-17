import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';

import aos from 'aos';
import VanillaTilt from 'vanilla-tilt';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, AfterViewInit {
  @ViewChild('scroll') scroll: ElementRef;
  @ViewChild('line') line: ElementRef;
  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;
  faInstagramSquare = faInstagramSquare;
  constructor() {}

  ngOnInit(): void {
    aos.init({
      once: true,
      // delay: 1000,
      startEvent: 'load',
    });
  }

  ngAfterViewInit() {
    VanillaTilt.init(this.scroll.nativeElement);
    VanillaTilt.init(this.line.nativeElement);
  }
}

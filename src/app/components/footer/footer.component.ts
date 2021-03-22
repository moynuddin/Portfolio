import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

import VanillaTilt from 'vanilla-tilt';
import aos from 'aos';
import anime from 'animejs';
import Vivus from 'vivus';

import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faNpm } from '@fortawesome/free-brands-svg-icons';
import { faYarn } from '@fortawesome/free-brands-svg-icons';

import { FormService } from '../../_services/form.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, AfterViewInit {
  @ViewChild('icons') html5: ElementRef;
  @ViewChild('css3') css3: ElementRef;
  @ViewChild('js') js: ElementRef;
  @ViewChild('angular') angular: ElementRef;
  @ViewChild('git') git: ElementRef;
  @ViewChild('github') github: ElementRef;
  @ViewChild('myForm') myForm: ElementRef;
  @ViewChild('sass') sass: ElementRef;
  @ViewChild('react') react: ElementRef;
  @ViewChild('bootstrap') bootstrap: ElementRef;
  @ViewChild('svganime') svganime: ElementRef;
  // contactForm: FormGroup;
  // submitted: Boolean = false;
  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faJsSquare = faJsSquare;
  faAngular = faAngular;
  faGitAlt = faGitAlt;
  faGithubSquare = faGithubSquare;
  faBootstrap = faBootstrap;
  faReact = faReact;
  faSass = faSass;
  faNodeJs = faNodeJs;
  faNpm = faNpm;
  faYarn = faYarn;
  message: string;

  constructor() {}

  ngOnInit(): void {
    aos.init({
      once: true,
    });
  }

  ngAfterViewInit() {
    console.log(this.svganime.nativeElement);

    new Vivus(this.svganime.nativeElement, {
      type: 'sync',
      duration: 12,
      animTimingFunction: Vivus.Ease,
    });
    VanillaTilt.init(this.html5.nativeElement);
    VanillaTilt.init(this.css3.nativeElement);
    VanillaTilt.init(this.js.nativeElement);
    VanillaTilt.init(this.angular.nativeElement);
    VanillaTilt.init(this.git.nativeElement);
    VanillaTilt.init(this.github.nativeElement);
    // VanillaTilt.init(this.myForm.nativeElement);
    VanillaTilt.init(this.sass.nativeElement);
    VanillaTilt.init(this.react.nativeElement);
    VanillaTilt.init(this.bootstrap.nativeElement);
  }
}

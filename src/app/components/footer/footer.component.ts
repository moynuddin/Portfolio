import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import VanillaTilt from 'vanilla-tilt';
import aos from 'aos';

import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faSave } from '@fortawesome/free-solid-svg-icons';

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
  contactForm: FormGroup;
  submitted: Boolean = false;
  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faJsSquare = faJsSquare;
  faAngular = faAngular;
  faGitAlt = faGitAlt;
  faGithubSquare = faGithubSquare;
  faSave = faSave;
  faBootstrap = faBootstrap;
  faReact = faReact;
  faSass = faSass;
  message: string;

  constructor(private fb: FormBuilder, private formServiceAPI: FormService) {}

  ngOnInit(): void {
    aos.init({
      once: true,
    });
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  get f() {
    return this.contactForm.controls;
  }
  ngAfterViewInit() {
    VanillaTilt.init(this.html5.nativeElement);
    VanillaTilt.init(this.css3.nativeElement);
    VanillaTilt.init(this.js.nativeElement);
    VanillaTilt.init(this.angular.nativeElement);
    VanillaTilt.init(this.git.nativeElement);
    VanillaTilt.init(this.github.nativeElement);
    VanillaTilt.init(this.myForm.nativeElement);
    VanillaTilt.init(this.sass.nativeElement);
    VanillaTilt.init(this.react.nativeElement);
    VanillaTilt.init(this.bootstrap.nativeElement);
  }

  onSubmitHandler() {
    this.submitted = true;
    this.formServiceAPI.postForm(this.contactForm.value).subscribe(
      (res) => {
        if (res['ok'] === true) {
          this.message = 'Response saved!';
          this.contactForm.reset();
          this.submitted = false;
        }
      },
      (error) => {
        console.log(error);
      }
    );

    console.log(this.contactForm.value);
  }
}

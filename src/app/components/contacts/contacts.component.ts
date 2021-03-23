import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faSave } from '@fortawesome/free-solid-svg-icons';

import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import aos from 'aos';
import VanillaTilt from 'vanilla-tilt';
import TypeIt from 'typeit';
import { FormService } from '../../_services/form.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit, AfterViewInit {
  @ViewChild('contacts') contacts: ElementRef;
  @ViewChild('myForm') myForm: ElementRef;
  @ViewChild('content') content: ElementRef;
  @ViewChild('subtitle') subtitle: ElementRef;
  contactForm: FormGroup;
  submitted: Boolean = false;
  faSave = faSave;
  constructor(
    private fb: FormBuilder,
    private formServiceAPI: FormService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
    aos.init({
      once: true,
    });
  }
  ngAfterViewInit() {
    VanillaTilt.init(this.contacts.nativeElement);
    VanillaTilt.init(this.myForm.nativeElement);
    VanillaTilt.init(this.content.nativeElement);
    new TypeIt(this.subtitle.nativeElement, {
      speed: 50,
      startDelay: 700,
      loop: true,
    })
      .type('Where to find me.')
      .pause(500)
      .go();
  }
  get f() {
    return this.contactForm.controls;
  }

  onSubmitHandler() {
    this.submitted = true;
    if (this.contactForm.invalid) return this.toastr.error('Please fill form!');
    this.spinner.show();
    this.formServiceAPI.postForm(this.contactForm.value).subscribe(
      (res) => {
        if (res['ok'] === true) {
          this.spinner.hide();
          this.toastr.success('Response Saved!');
          // this.message = 'Response saved!';
          this.contactForm.reset();
          this.submitted = false;
        }
      },
      (error) => {
        this.spinner.hide();
        this.toastr.error('Something went wrong!');
        console.log(error);
      }
    );
  }
}

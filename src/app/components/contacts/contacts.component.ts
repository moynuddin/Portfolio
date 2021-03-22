import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faSave } from '@fortawesome/free-solid-svg-icons';

import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { FormService } from '../../_services/form.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
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

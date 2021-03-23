import { Component, OnInit, AfterViewInit } from '@angular/core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import TypeIt from 'typeit';

import aos from 'aos';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, AfterViewInit {
  faPencilAlt = faPencilAlt;
  faBriefcase = faBriefcase;
  faUserGraduate = faUserGraduate;
  constructor() {}

  ngOnInit(): void {
    aos.init({
      once: true,
    });
  }
  ngAfterViewInit() {}
}

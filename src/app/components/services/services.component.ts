import { Component, OnInit } from '@angular/core';

import aos from 'aos';

import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faBezierCurve } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  faPalette = faPalette;
  faLightbulb = faLightbulb;
  faBezierCurve = faBezierCurve;
  faCode = faCode;
  faLaptopCode = faLaptopCode;

  constructor() {}

  ngOnInit(): void {
    aos.init();
  }
}

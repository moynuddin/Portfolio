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
  faLaptopCode = faLaptopCode;
  faCode = faCode;

  uiux =
    'Responsible for designing interactive wireframing and prototyping for a better user expreience. ';
  web =
    'Implementing html and css to give life to wireframe, Making the design reponsive for different viewport devices';
  api =
    'Implementing functionality and animation in static web pages, Adding events and Integrating Restful api for server interaction';

  constructor() {}

  ngOnInit(): void {
    aos.init({
      once: true,
    });
  }
}

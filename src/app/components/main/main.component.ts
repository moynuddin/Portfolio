import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import VanillaTilt from 'vanilla-tilt';
import aos from 'aos';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, AfterViewInit {
  @ViewChild('graphic') graphic: ElementRef;
  constructor() {}

  ngOnInit(): void {
    aos.init({
      once: true,
    });
  }

  ngAfterViewInit() {
    VanillaTilt.init(this.graphic.nativeElement);
  }
}

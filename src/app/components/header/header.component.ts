import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('burger') burger: ElementRef;
  @ViewChild('wrapper') wrapper: ElementRef;
  isMenuCollapsed: Boolean = true;
  constructor() {}

  ngOnInit(): void {}

  toggel() {
    const open = this.burger.nativeElement;
    const container = this.wrapper.nativeElement;
    this.isMenuCollapsed = !this.isMenuCollapsed;
    if (this.isMenuCollapsed) {
      open.classList.remove('open');
      container.classList.remove('wrapper');
    } else {
      open.classList.add('open');

      container.classList.add('wrapper');
    }
  }
}

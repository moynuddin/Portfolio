import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('burger') burger: ElementRef;
  isMenuCollapsed: Boolean = true;
  constructor() {}

  ngOnInit(): void {}

  toggel() {
    const open = this.burger.nativeElement;
    this.isMenuCollapsed = !this.isMenuCollapsed;
    if (this.isMenuCollapsed) {
      open.classList.remove('open');
    } else {
      open.classList.add('open');
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  isMenuHidden = false;

  constructor() {}

  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }
}

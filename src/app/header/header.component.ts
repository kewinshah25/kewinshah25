import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  active = false;
  currentPage = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd), map(e => e as NavigationEnd)).subscribe(e => {
      this.currentPage = e.urlAfterRedirects.split('/')[1];
    });
  }

  toggleClasses() {
    this.active = !this.active;
  }

  openModal() {
  }
}

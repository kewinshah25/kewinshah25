import { Component, NgModule } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  currentPage: string;
  title = 'website';

  constructor(
    private router: Router
  ) {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd), map(e => e as NavigationEnd)).subscribe(e => {
      this.currentPage = e.urlAfterRedirects.split('/')[1];
    })
  }
}

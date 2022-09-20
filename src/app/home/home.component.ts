import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { HomeService } from 'src/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public activeTab: string;
  constructor(
    private homeService: HomeService
    ) {
      this.homeService.activeTab$.pipe(filter(x=>!!x)).subscribe(activeTab => {
        this.activeTab = activeTab
      });
    }

    ngOnInit(): void {
    }

  public changeTabs(tab: string) {
    this.homeService.changeTabs(tab);
  }
}

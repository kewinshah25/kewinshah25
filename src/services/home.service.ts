import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private activeTabSubject: BehaviorSubject<string> = new BehaviorSubject('about');

  public get activeTab$(): Observable<string> {
    return this.activeTabSubject.asObservable();
  }

  constructor() {

  }

  public changeTabs(tab: string) {
    this.activeTabSubject.next(tab);
  }
}

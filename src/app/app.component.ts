import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  static readonly AMARNATH: string = 'Amarnath';

  constructor(
    private router: Router,
    private title: Title,
  ) {
    router.events.subscribe(event => {
      const pageTitle: string = router.url.replace(/\//g, '-');
      title.setTitle(AppComponent.AMARNATH + pageTitle);
    });
  }
}

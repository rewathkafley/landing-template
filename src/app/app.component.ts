import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import {ScullyRoutesService} from '@scullyio/ng-lib-v8';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'landing';
  page: { content: { body: any[] } };

  constructor(private service: AppService, private scully: ScullyRoutesService) {
  }

  ngOnInit(): void {
    this.scully.available$.subscribe(links => {
      debugger;
    });
    this.service.getPage().subscribe((data: any) => {
      this.page = data;
    });
  }

  createContent() {
    return {
      header: this.page.content.body[0],
      about_us: this.page.content.body[1],
      news_list: this.page.content.body[2]
    };
  }
}

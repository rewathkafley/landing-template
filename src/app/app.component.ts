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
  page: { content: any };

  constructor(private service: AppService, private scully: ScullyRoutesService) {
  }

  ngOnInit(): void {
    this.scully.available$.subscribe(links => {
    });
    this.service.getPage().subscribe((data: any) => {
      this.page = data;
    });
  }

  createContent() {
    return {
      header: this.page.content.header,
      about_us: this.page.content.about_us,
      news_list: this.page.content.trending_news,
      faqs: this.page.content.faqs,
      footer: this.page.content.footer
    };
  }
}

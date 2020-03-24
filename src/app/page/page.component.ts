import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  @Input() content: { header: any, about_us: any, news_list: any };

  constructor() {
  }

  ngOnInit() {
  }

}

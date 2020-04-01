import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  @Input() data: any;

  newsList: { id: number, title: string, description: string }[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get(this.data.data_source).subscribe((news: { id: number, title: string, description: string }[]) => {
      this.newsList = news;
    });
  }
}

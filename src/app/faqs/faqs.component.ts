import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
  @Input() data: any;
  faqs: any[];

  constructor() {
  }

  ngOnInit() {
    this.faqs = this.data.list;
  }

}

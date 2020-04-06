import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() data: any;
  socialLinks: { url: string, text: string }[];

  constructor() {
  }

  ngOnInit() {
    this.socialLinks = this.data.social_links;
  }

}

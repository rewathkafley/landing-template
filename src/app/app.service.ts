import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {first, switchMap} from 'rxjs/operators';

export interface Config {
  api_url: string;
  page_id: number;
  page_url?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  config: Partial<Config> = {};

  configFetched = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.http.get('config.json').subscribe((config: Config) => {
      this.config = config;
      this.config.page_url = `${config.api_url}/${config.page_id}`;
      this.configFetched.next(true);
    });
  }

  getPage() {
    return this.configFetched.pipe(first(f => !!f), switchMap(_ => {
      return this.http.get(this.config.page_url);
    }));
  }
}

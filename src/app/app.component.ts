import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { Thread } from './thread';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Lab162PaupersReddit';
  thread?: Thread;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getRedditThread();
  }

  getRedditThread() {
    this.http.get<any>('https://www.reddit.com/r/aww/.json').subscribe((result: Thread) => {
      this.thread = result;
      console.log(result);
    })
  }
}

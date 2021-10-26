import { Component, Input, OnInit } from '@angular/core';
import { Thread } from '../thread';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {
  @Input() thread?: Thread;

  constructor() { }

  ngOnInit(): void {
  }

}

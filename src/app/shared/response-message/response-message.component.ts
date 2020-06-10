import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-response-message',
  templateUrl: './response-message.component.html',
  styleUrls: ['./response-message.component.sass']
})
export class ResponseMessageComponent implements OnInit, OnChanges {
  @Input() class: any;
  @Input() show = false;
  header: any;
  @Input() message: any;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(v) {
    this.header = this.class === 'danger' ? 'Error' : 'Success';
   }
}

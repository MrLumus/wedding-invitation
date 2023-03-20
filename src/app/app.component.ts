import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'wedding-invitation';

  constructor(private wowService: NgwWowService) {}

  ngOnInit() {
    this.wowService.init();
  }

  reset() {
    this.wowService.init();
  }
}

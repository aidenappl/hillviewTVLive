import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RequestService } from 'src/services/http/request.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss'],
})
export class WatchComponent implements OnInit {
  showSplash = true;

  constructor(private request: RequestService) {}

  ngOnInit(): void {
  }

}

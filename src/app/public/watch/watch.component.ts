import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import videojs from 'video.js';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {

  @ViewChild('target', { static: true }) target!: ElementRef;
  // see options: https://github.com/videojs/video.js/blob/maintutorial-options.html
  @Input() options!: {
      fluid: boolean,
      aspectRatio: string,
      autoplay: boolean,
      sources: {
          src: string,
          type: string,
      }[],
  };
  player!: videojs.Player;

  showSplash = false;

  constructor() { }

  ngOnInit(): void {
    this.player = videojs(this.target.nativeElement, this.options, () => {
      console.log('onPlayerReady', this);
    });

    this.player.on('error', () => {
      console.log('error')
      this.showSplash = true;
    });
    
    this.player.on('ended', () => {
      console.log('ended')
      this.showSplash = true;
    });

    this.player.on('play', () => {
      this.showSplash = false;
    });
  }
  
  ngOnDestroy() {
    // destroy player
    if (this.player) {
      this.player.dispose();
    }
  }

}

import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ChannelDetail } from '../../common/interfaces/channel-detail.interface';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  @Input() public channel: ChannelDetail;

  public isOpenPopover: boolean = false;

  constructor(private domSanitizer: DomSanitizer, private eRef: ElementRef) { }

  ngOnInit() {}

  @HostListener('document:click', ['$event'])
  public onClickDocument(event): void {
    if (this.eRef.nativeElement.contains(event.target)) {
      this.isOpenPopover = !this.isOpenPopover;
      return;
    }

    this.isOpenPopover = false;
  }
}

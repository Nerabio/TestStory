import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-load-more',
  templateUrl: './button-load-more.component.html',
  styleUrls: ['./button-load-more.component.scss']
})
export class ButtonLoadMoreComponent implements OnInit {
  @Output() public onClickBtn = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  public onBtnonClickBtn(ev: any): void {
    this.onClickBtn.emit(true);
  }

}

import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { MenuItem } from '../../common/interfaces/menu-item.interface';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})
export class NavigateComponent implements OnInit {

  public menuItems = [
                      { name: 'First',  route: 'first' },
                      { name: 'Second', route: 'second' },
                      { name: 'Телеканалы', route: 'channels' }
                     ] as MenuItem[];

  constructor() { }

  ngOnInit() {
  }

}

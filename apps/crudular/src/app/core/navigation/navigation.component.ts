import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crud-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor() {
    console.log('foo');
  }

  ngOnInit(): void {
    console.log('bar');
  }
}

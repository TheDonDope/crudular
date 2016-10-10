import { Component } from '@angular/core';

import { environment } from '../environments/environment';

@Component({
  selector: 'cru-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    console.log(JSON.stringify(environment));
  }

}

import { Component } from '@angular/core';
import { StringyClass } from 'my-shared-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-sample-app';

  dummyData: StringyClass;
  /**
   *
   */
  constructor() {
    this.dummyData = new StringyClass('test');
  }


}

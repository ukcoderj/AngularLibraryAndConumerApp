import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-shared-components',
  template: `
    <p>
      my-shared-components works!
    </p>
  `,
  styles: [
  ]
})
export class MySharedComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

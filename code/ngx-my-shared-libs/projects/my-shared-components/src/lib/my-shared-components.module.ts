import { NgModule } from '@angular/core';
import { MySharedComponentsComponent } from './my-shared-components.component';
import { TestViewComponent } from './test-view/test-view.component';



@NgModule({
  declarations: [
    MySharedComponentsComponent,
    TestViewComponent
  ],
  imports: [
  ],
  exports: [
    MySharedComponentsComponent,
    TestViewComponent /* NEW! */
  ]
})
export class MySharedComponentsModule { }

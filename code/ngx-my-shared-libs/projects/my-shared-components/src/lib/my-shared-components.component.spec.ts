import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySharedComponentsComponent } from './my-shared-components.component';

describe('MySharedComponentsComponent', () => {
  let component: MySharedComponentsComponent;
  let fixture: ComponentFixture<MySharedComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySharedComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySharedComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

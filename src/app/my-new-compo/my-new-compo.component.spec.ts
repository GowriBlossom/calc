import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewCompoComponent } from './my-new-compo.component';

describe('MyNewCompoComponent', () => {
  let component: MyNewCompoComponent;
  let fixture: ComponentFixture<MyNewCompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNewCompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNewCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

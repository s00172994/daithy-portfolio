import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoswipeBgComponent } from './photoswipe-bg.component';

describe('PhotoswipeBgComponent', () => {
  let component: PhotoswipeBgComponent;
  let fixture: ComponentFixture<PhotoswipeBgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoswipeBgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoswipeBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

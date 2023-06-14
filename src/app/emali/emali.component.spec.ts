import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmaliComponent } from './emali.component';

describe('EmaliComponent', () => {
  let component: EmaliComponent;
  let fixture: ComponentFixture<EmaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmaliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

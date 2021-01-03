import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionsMessageComponent } from './instructions-message.component';

describe('InstructionsMessageComponent', () => {
  let component: InstructionsMessageComponent;
  let fixture: ComponentFixture<InstructionsMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructionsMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionsMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

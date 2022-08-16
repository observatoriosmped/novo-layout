import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafaPainelComponent } from './grafa-painel.component';

describe('GrafaPainelComponent', () => {
  let component: GrafaPainelComponent;
  let fixture: ComponentFixture<GrafaPainelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrafaPainelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafaPainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

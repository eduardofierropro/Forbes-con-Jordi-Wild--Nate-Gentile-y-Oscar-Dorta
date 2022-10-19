import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerComponent } from './influencer.component';

describe('InfluencerComponent', () => {
  let component: InfluencerComponent;
  let fixture: ComponentFixture<InfluencerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfluencerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

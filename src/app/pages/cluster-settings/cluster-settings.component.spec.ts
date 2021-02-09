import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterSettingsComponent } from './cluster-settings.component';

describe('ClusterSettingsComponent', () => {
  let component: ClusterSettingsComponent;
  let fixture: ComponentFixture<ClusterSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClusterSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

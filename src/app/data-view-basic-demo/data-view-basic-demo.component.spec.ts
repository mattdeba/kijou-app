import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataViewBasicDemoComponent } from './data-view-basic-demo.component';

describe('DataViewBasicDemoComponent', () => {
  let component: DataViewBasicDemoComponent;
  let fixture: ComponentFixture<DataViewBasicDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataViewBasicDemoComponent]
    });
    fixture = TestBed.createComponent(DataViewBasicDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

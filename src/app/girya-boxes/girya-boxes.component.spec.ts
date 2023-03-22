@@ -0,0 +1,23 @@
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiryaBoxesComponent } from './girya-boxes.component';

describe('GiryaBoxesComponent', () => {
  let component: GiryaBoxesComponent;
  let fixture: ComponentFixture<GiryaBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiryaBoxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiryaBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

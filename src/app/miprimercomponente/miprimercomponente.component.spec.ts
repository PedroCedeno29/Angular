import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiprimercomponenteComponent } from './miprimercomponente.component';

describe('MiprimercomponenteComponent', () => {
  let component: MiprimercomponenteComponent;
  let fixture: ComponentFixture<MiprimercomponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiprimercomponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiprimercomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
